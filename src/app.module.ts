import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ChatroomsModule } from './chatrooms/chatrooms.module';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database/omegadb.db',
      autoLoadEntities: true,
      synchronize: true
    }),
    UsersModule,
    ChatroomsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
