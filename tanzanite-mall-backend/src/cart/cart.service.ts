import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { CartItem } from './entities/cart-item.entity';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { ProductsService } from '../products/products.service';
import { User } from '../users/entities/user.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
    @InjectRepository(CartItem)
    private cartItemRepository: Repository<CartItem>,
    private productsService: ProductsService,
  ) {}

  async getOrCreateCart(user: User): Promise<Cart> {
    let cart = await this.cartRepository.findOne({
      where: { user: { id: user.id } },
      relations: ['items', 'items.product'],
    });

    if (!cart) {
      cart = this.cartRepository.create({ user });
      cart = await this.cartRepository.save(cart);
    }

    return cart;
  }

  async addToCart(user: User, addToCartDto: AddToCartDto): Promise<Cart> {
    const cart = await this.getOrCreateCart(user);
    const product = await this.productsService.findOne(addToCartDto.productId);

    if (!product.inStock) {
      throw new BadRequestException('Product is out of stock');
    }

    let cartItem = cart.items.find(item => item.product.id === addToCartDto.productId);

    if (cartItem) {
      cartItem.quantity += addToCartDto.quantity;
      await this.cartItemRepository.save(cartItem);
    } else {
      cartItem = this.cartItemRepository.create({
        cart,
        product,
        quantity: addToCartDto.quantity,
      });
      await this.cartItemRepository.save(cartItem);
      cart.items.push(cartItem);
    }

    return this.getOrCreateCart(user);
  }

  async updateQuantity(user: User, cartItemId: string, quantity: number): Promise<Cart> {
    const cart = await this.getOrCreateCart(user);
    const cartItem = cart.items.find(item => item.id === cartItemId);

    if (!cartItem) {
      throw new NotFoundException('Cart item not found');
    }

    if (quantity <= 0) {
      await this.cartItemRepository.remove(cartItem);
    } else {
      cartItem.quantity = quantity;
      await this.cartItemRepository.save(cartItem);
    }

    return this.getOrCreateCart(user);
  }

  async removeFromCart(user: User, cartItemId: string): Promise<Cart> {
    const cart = await this.getOrCreateCart(user);
    const cartItem = cart.items.find(item => item.id === cartItemId);

    if (!cartItem) {
      throw new NotFoundException('Cart item not found');
    }

    await this.cartItemRepository.remove(cartItem);
    return this.getOrCreateCart(user);
  }

  async clearCart(user: User): Promise<Cart> {
    const cart = await this.getOrCreateCart(user);
    await this.cartItemRepository.remove(cart.items);
    return this.getOrCreateCart(user);
  }

  async getCartSummary(user: User) {
    const cart = await this.getOrCreateCart(user);
    const subtotal = cart.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    const vat = subtotal * 0.18; // 18% VAT
    const total = subtotal + vat;

    return {
      items: cart.items,
      subtotal,
      vat,
      total,
      itemCount: cart.items.reduce((sum, item) => sum + item.quantity, 0),
    };
  }
} 