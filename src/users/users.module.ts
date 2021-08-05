import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { UserSchema } from './schemas/user.schema';

@Module({
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
})
export class UsersModule {}
