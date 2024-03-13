import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserProviders } from './user.provider';
import { CartService } from 'src/cart/cart.service';
import { CartProviders } from 'src/cart/cart.provider';

@Module({
  controllers: [UserController],
  providers: [UserService,...UserProviders],
})
export class UserModule {}
