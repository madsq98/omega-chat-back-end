import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ChatroomsModule } from './chatrooms/chatrooms.module';

@Module({
  imports: [UsersModule, ChatroomsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
