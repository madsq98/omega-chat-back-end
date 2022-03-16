import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { BasicStrategy } from './auth-basic.strategy';
import { ConfigModule } from '@nestjs/config';
import { UsersRepository } from "../infrastructure/typeorm/usersRepository/usersRepository";
import { IUsersRepository } from "../infrastructure/iUsersRepository";
import { UsersService } from "../users/users.service";
import { UsersModule } from "../users/users.module";

@Module({
  imports: [PassportModule, ConfigModule, UsersModule],
  providers: [
    BasicStrategy,
    {
      provide: 'UsersRepository',
      useClass: UsersRepository
    },
    {
      inject: ['UsersRepository'],
      provide: 'UsersService',
      useFactory: (userRepo: IUsersRepository) => new UsersService(userRepo)
    }
  ],
})
export class AuthModule {}