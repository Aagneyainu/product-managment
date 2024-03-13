
/**
 * @Author Sajina p k
 * @description Service  for product
 */

import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PRODUCT } from 'src/constatnts';
import { ProductEntity } from './entities/product.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ProductService {

  constructor(
    @Inject(PRODUCT)
    private readonly product: typeof ProductEntity,
    private userService: UserService

  ) { }



  /**
   * 
   * Function to return all products in data base
   * @param token 
   * @returns 
   */
  async findAllProducts(token) {

    try {
      /**Fetching data from user table against token */
      const user = await this.userService.findOneUser(token.token)
      if (user) {

        //Fetching data from product table.
        const products = await this.product.findAll()

        return {
          statusCode: 200,
          success: true,
          message: 'Success',
          data: products
        }
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

  
}
