import { Controller, Get, Post } from '@nestjs/common';
 @Controller('users') 
export class UsersController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
