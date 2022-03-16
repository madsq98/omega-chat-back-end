import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';
import { ChatsRepository } from "../infrastructure/typeorm/chatsRepository/chatsRepository";
import { IChatsRepository } from "../infrastructure/iChatsRepository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChatsSchema } from "../infrastructure/typeorm/chatsRepository/chats.schema";

@Module({
  imports: [TypeOrmModule.forFeature([ChatsSchema])],
  controllers: [ChatsController, ChatsService],
  providers: [ChatsService,
    {
      provide: 'ChatsRepository',
      useClass: ChatsRepository
    },
    {
      inject: ['ChatsRepository'],
      provide: 'ChatsService',
      useFactory: (chatRepo: IChatsRepository) => new ChatsService(chatRepo)
    },]
})
export class ChatsModule {}
