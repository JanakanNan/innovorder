import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(
    email: string,
    pass: string,
  ): Promise<Pick<any, string | number | symbol>> {
    const users = await this.usersService.findOne({ email: email });
    if (users[0] && users[0].password == pass) {
      const { password, ...result } = users[0];
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
