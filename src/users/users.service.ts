import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument, User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private useModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.useModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.useModel.find().exec();
  }

  async update(id, createUserDto: CreateUserDto): Promise<User> {
    return await this.useModel.findByIdAndUpdate(id, createUserDto);
  }

  async delete(id) {
    return await this.useModel.findByIdAndRemove(id);
  }

  async findOne(query, projection = {}) {
    return this.useModel.find(query, projection);
  }
}
