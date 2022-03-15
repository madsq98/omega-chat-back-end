import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersSchema } from "../infrastructure/typeorm/usersRepository/users.schema";
import { UsersRepository } from "../infrastructure/typeorm/usersRepository/usersRepository";
import { IUsersRepository } from "../infrastructure/iUsersRepository";

@Module({
  imports: [TypeOrmModule.forFeature([UsersSchema])],
  controllers: [UsersController],
  providers: [
    {
      provide: 'UsersRepository',
      useClass: UsersRepository
    },
    {
      inject: ['UsersRepository'],
      provide: 'UsersService',
      useFactory: (userRepo: IUsersRepository) => new UsersService(userRepo)
    }
  ]
})
export class UsersModule {}
