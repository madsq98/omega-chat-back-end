import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ChatroomsModule } from './chatrooms/chatrooms.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./users/entities/user.entity";
import { Chatroom } from "./chatrooms/entities/chatroom.entity";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { ChatsModule } from './chats/chats.module';
import { Chat } from "./chats/entities/chat.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database/omegadb.db',
      autoLoadEntities: true,
      synchronize: true,
      entities: [User, Chatroom, Chat]
    }),
    UsersModule,
    ChatroomsModule,
    ChatsModule,
  ConfigModule.forRoot(),
  AuthModule,
  ChatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
