import { Body, Controller, Post, Get, Put, Param, Delete } from "@nestjs/common";
import { ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create.dto';
import { User } from './schemas/user.schema';

@Controller('users')
@ApiTags('User')
export class UsersController {
  constructor(private service: UsersService) {}

  @Post('/create')
  async add(@Body() dto: CreateUserDto) {
    console.log(dto);
    return await this.service.create(dto);
  }

  @Get('all')
  async findAll(): Promise<User[]> {
    return this.service.findAll();
  }

  @Put('/update/:id')
  async update(@Param('id') id: string, @Body() body) {
    return this.service.update(id, body);
  }

  @Delete('/delete/:id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
