import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order, OrderStatus } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ProductsService } from '../products/products.service';
import { User } from '../users/entities/user.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    @InjectRepository(OrderItem)
    private orderItemsRepository: Repository<OrderItem>,
    private productsService: ProductsService,
  ) {}

  async create(createOrderDto: CreateOrderDto, user: User): Promise<Order> {
    const order = this.ordersRepository.create({
      user,
      status: OrderStatus.PENDING,
      shippingAddress: createOrderDto.shippingAddress,
    });

    const savedOrder = await this.ordersRepository.save(order);
    let subtotal = 0;

    for (const item of createOrderDto.items) {
      const product = await this.productsService.findOne(item.productId);
      
      if (!product.inStock) {
        throw new BadRequestException(`Product ${product.name} is out of stock`);
      }

      const orderItem = this.orderItemsRepository.create({
        order: savedOrder,
        product,
        quantity: item.quantity,
        price: product.price,
        subtotal: product.price * item.quantity,
      });

      await this.orderItemsRepository.save(orderItem);
      subtotal += orderItem.subtotal;
    }

    const vat = subtotal * 0.18; // 18% VAT
    const total = subtotal + vat;

    savedOrder.subtotal = subtotal;
    savedOrder.vat = vat;
    savedOrder.total = total;

    return this.ordersRepository.save(savedOrder);
  }

  async findAll(user: User): Promise<Order[]> {
    return this.ordersRepository.find({
      where: { user: { id: user.id } },
      relations: ['items', 'items.product'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string, user: User): Promise<Order> {
    const order = await this.ordersRepository.findOne({
      where: { id, user: { id: user.id } },
      relations: ['items', 'items.product'],
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    return order;
  }

  async update(id: string, updateOrderDto: UpdateOrderDto, user: User): Promise<Order> {
    const order = await this.findOne(id, user);

    if (order.status === OrderStatus.DELIVERED) {
      throw new BadRequestException('Cannot update a delivered order');
    }

    Object.assign(order, updateOrderDto);
    return this.ordersRepository.save(order);
  }

  async cancel(id: string, user: User): Promise<Order> {
    const order = await this.findOne(id, user);

    if (order.status !== OrderStatus.PENDING) {
      throw new BadRequestException('Can only cancel pending orders');
    }

    order.status = OrderStatus.CANCELLED;
    return this.ordersRepository.save(order);
  }
} 