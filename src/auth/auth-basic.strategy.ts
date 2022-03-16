import { BasicStrategy as Strategy } from 'passport-http';
import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { UsersService } from "../users/users.service";
import { User } from "../users/entities/user.entity";

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    @Inject('UsersService') private readonly usersService: UsersService
  ) {
    super({
      passReqToCallback: true
    });
  }

  public validate = async (req, username, password): Promise<User> => {
    let login = await this.usersService.login(username, password)
    if ( login ) {
      return login;
    }
    throw new UnauthorizedException();
  }
}