import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserProviders } from './user.provider';

@Module({
  controllers: [UserController],
  providers: [UserService,...UserProviders],
})
export class UserModule {}
