import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty()
  lastName: string;

  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  age: number;
}
