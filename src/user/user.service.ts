/**
 * @Author Sajina p k
 * @description Service for user table
 */

import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

import { USER } from 'src/constatnts';
import { UserEntity } from './entities/user.entity';
import { CartService } from 'src/cart/cart.service';

@Injectable()
export class UserService {

  constructor(
    @Inject(USER)
    private readonly user: typeof UserEntity,



  ) { }


  /**
   * 
   * Function to create user registration
   * @param createUserDto 
   * @returns 
   */
  async registration(createUserDto: CreateUserDto) {

    try {

      /**Fetching input data */
      let registrationDto = {

        ...createUserDto
      }

      /**Create a new record in user table */
      const user = await this.user.create(registrationDto)
      return {
        statusCode: 200,
        success: true,
        message: 'Reghistration completed successfully',
        data: user
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
   * 
   * Login function to authenticate users,only registred users with username and password will be authenticated
   * @param loginDto 
   * @returns 
   */
  async login(loginDto) {

    try {

      /**Fetching data from user table against provided username and password */
      const user = await this.user.findOne({
        where: {
          username: loginDto.username,
          password: loginDto.password
        }
      })

      /**  Checking if user is exist or not using the provided datas,users data will be returned only if the user is registered user otherwise return Authentication failed,No user found. */
      if (user) {

        /**If user exist then generate a random token and update user table */

        //Here,token is implemented using a random generation logic for every login and will be updated the token in table after the user have logged every time,here passport ,authguard other libraries are not used beacuse of the limited time iam provided with.
        const token = Math.floor(Math.random() * 9000000000000);


        const a = await user.update({
          token: token
        })

        return {
          statusCode: 200,
          success: true,
          message: 'User authenticated successfully',
          data: token
        }

      } else {

        return {
          statusCode: 400,
          success: false,
          message: 'Authentication failed,No user found.'
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
   * 
   * Function to return all users
   * @returns 
   * 
   */
  async findAllUsers() {
    return this.user.findAll();
  }


  /**
   * 
   * Function to find user against token 
   * @param token 
   * @returns 
   */
  async findOneUser(token) {


    const user = await this.user.findOne({
      where: {
        token: token
      }
    })

    return user
  }





}
