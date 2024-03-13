import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductProviders } from './product.provider';
import { UserService } from 'src/user/user.service';
import { UserProviders } from 'src/user/user.provider';

@Module({
  controllers: [ProductController],
  providers: [ProductService,...ProductProviders,UserService,...UserProviders],
})
export class ProductModule {}
