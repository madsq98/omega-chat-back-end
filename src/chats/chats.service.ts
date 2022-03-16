import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { IRepository } from "../infrastructure/iRepository";
import { Chat } from "./entities/chat.entity";
import { IChatsRepository } from "../infrastructure/iChatsRepository";

@Injectable()
export class ChatsService {
  constructor(private readonly chatRepo: IChatsRepository) {
  }
  create(obj: Chat) {
    return this.chatRepo.create(obj);
  }

  findAll() {
    return this.chatRepo.getAll();
  }

  findAllInRoom(id: string) {
    return this.chatRepo.getAllFromChatRoom(id);
  }
}
