import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { CartProviders } from './cart.provider';
import { UserService } from 'src/user/user.service';
import { UserProviders } from 'src/user/user.provider';

@Module({
  controllers: [CartController],
  providers: [CartService,...CartProviders,UserService,...UserProviders],
})
export class CartModule {}
