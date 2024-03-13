
/**
 * @Author Sajina p k
 * @description Controller for product
 */
import { Controller, Get, Post, Body, Patch, Param, Delete ,Request} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  
  /**
   * Api to get a list of all products in database
   * @param token 
   * @returns 
   */
  @Get('find-all-products/:token')
  findAll(@Param()token:number) {
    return this.productService.findAllProducts(token);
  }

  
}
