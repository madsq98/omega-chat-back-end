import { Module } from '@nestjs/common';
import { ChatroomsService } from './chatrooms.service';
import { ChatroomsController } from './chatrooms.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChatroomsSchema } from "../infrastructure/typeorm/chatRoomsRepository/chatrooms.schema";
import { ChatRoomsRepository } from "../infrastructure/typeorm/chatRoomsRepository/chatRoomsRepository";
import { IRepository } from "../infrastructure/iRepository";
import { Chatroom } from "./entities/chatroom.entity";

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
    }

  ]
})
export class ChatroomsModule {}
