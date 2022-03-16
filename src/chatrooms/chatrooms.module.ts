import { Module } from '@nestjs/common';
import { ChatroomsService } from './chatrooms.service';
import { ChatroomsController } from './chatrooms.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChatroomsSchema } from "../infrastructure/typeorm/chatRoomsRepository/chatrooms.schema";
import { ChatRoomsRepository } from "../infrastructure/typeorm/chatRoomsRepository/chatRoomsRepository";
import { IRepository } from "../infrastructure/iRepository";
import { Chatroom } from "./entities/chatroom.entity";
import { UsersRepository } from "../infrastructure/typeorm/usersRepository/usersRepository";
import { IUsersRepository } from "../infrastructure/iUsersRepository";
import { UsersService } from "../users/users.service";

@Module({
  imports: [TypeOrmModule.forFeature([ChatroomsSchema])],
  controllers: [ChatroomsController],
  providers: [
    {
      provide: 'ChatRoomsRepository',
      useClass: ChatRoomsRepository
    },
    {
      inject: ['ChatRoomsRepository'],
      provide: 'ChatroomsService',
      useFactory: (chatRoomRepo: IRepository<Chatroom>) => new ChatroomsService(chatRoomRepo)
    },
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
export class ChatroomsModule {}
