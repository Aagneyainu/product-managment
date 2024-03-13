import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, LoginDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }


  /**
   * 
   * Api to create user registration
   * @param createUserDto 
   * @returns 
   */
  @Post('registration')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.registration(createUserDto);
  }

  /**
   * 
   * Api to return all users
   * @returns 
   */
  @Get('find-all-users')
  findAll() {
    return this.userService.findAllUsers();
  }

  /**
   * 
   * login api to authenticated users
   * @param loginDto 
   * @returns 
   */
  @Post('login')
  login(@Body(ValidationPipe) loginDto: LoginDto) {
    return this.userService.login(loginDto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
