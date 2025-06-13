import { Controller, Get, Post, Body, Param, Delete, Patch, UseGuards, Request } from '@nestjs/common';
import { CartService } from './cart.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('cart')
@UseGuards(JwtAuthGuard)
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  getCart(@Request() req) {
    return this.cartService.getCartSummary(req.user);
  }

  @Post('add')
  addToCart(@Body() addToCartDto: AddToCartDto, @Request() req) {
    return this.cartService.addToCart(req.user, addToCartDto);
  }

  @Patch('items/:id/quantity')
  updateQuantity(
    @Param('id') id: string,
    @Body('quantity') quantity: number,
    @Request() req,
  ) {
    return this.cartService.updateQuantity(req.user, id, quantity);
  }

  @Delete('items/:id')
  removeFromCart(@Param('id') id: string, @Request() req) {
    return this.cartService.removeFromCart(req.user, id);
  }

  @Delete()
  clearCart(@Request() req) {
    return this.cartService.clearCart(req.user);
  }
} 