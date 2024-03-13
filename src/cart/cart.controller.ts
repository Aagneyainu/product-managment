
/**
 * @Author Sajina p k
 * @description Controller for cart
 */
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ValidationPipe } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from 'src/user/dto/update-user.dto';


@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) { }


  /**
   * Api to add products to cart
   * @param createCartDto 
   * @returns 
   */
  @Post('add-to-cart')
  create(@Body(ValidationPipe) createCartDto: CreateCartDto) {
    return this.cartService.addToCart(createCartDto);
  }

  /**
   * Api to update the users cart
   * @param id 
   * @param updateCartDto 
   * @returns 
   */
  @Patch('update-cart/:id')
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.updateCart(id, updateCartDto);
  }

  /**
   * 
   * Api to remove items from cart
   * @param query 
   * @returns 
   */
  @Delete('remove-cart')
  remove(@Query() query: any) {
    return this.cartService.removeCart(query);
  }
}
