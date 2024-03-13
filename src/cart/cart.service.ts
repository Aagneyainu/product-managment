import { Inject, Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CartEntity } from './entities/cart.entity';
import { CART } from 'src/constatnts';
import { UserService } from 'src/user/user.service';

@Injectable()
export class CartService {

  constructor(
    @Inject(CART)
    private readonly cart: typeof CartEntity,
    private userService: UserService


  ) { }

  /**
   * Function to add products to cart
   * @param createCartDto 
   * @returns 
   */
  async addToCart(createCartDto) {
    try {

      //Calling function to fetch user data against token
      const user = await this.userService.findOneUser(createCartDto.token)

      if (user) {

        //Preparing the data to be added to cart
        let cartDto = {

          id: createCartDto.id,
          user_id: user.id,
          product_id: createCartDto.product_id,
          quantity: createCartDto.quantity,
          price: createCartDto.price
        }

        //Create a new record in cart table
        const cart = await this.cart.create(cartDto)
        return {
          statusCode: 200,
          success: true,
          message: 'Success',
          data: cart
        }

        //else return an unauthorized error message.
      } else {
        return {
          statusCode: 400,
          success: false,
          message: 'Un authorized'
        };
      }
    } catch (error) {
      return {
        statusCode: 400,
        success: false,
        error,
      };
    }
  }

  /**
   * Function to remove items from cart
   * @param query 
   * @returns 
   */
  async removeCart(query) {
    try {
      //Calling function to fetch user data against token
      const user = await this.userService.findOneUser(query.token)
      if (user) {

        const cart = await this.cart.findOne(query.id)

        if (user.id == cart.user_id) {

          await this.cart.destroy({
            where: {
              id: query.id
            }
          })

          return {
            statusCode: 200,
            success: true,
            message: 'Added item deleted from cart successfully',
          }
        }

      } else {
        return {
          statusCode: 400,
          success: false,
          message: 'Un authorized'
        };
      }

    } catch (error) {
      console.log('ERRROR', error)
      return {
        statusCode: 400,
        success: false,
        error,
      };
    }
  }
  create(createCartDto: CreateCartDto) {
    return 'This action adds a new cart';
  }

  findAll() {
    return `This action returns all cart`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
