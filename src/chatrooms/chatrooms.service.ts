import { Injectable } from '@nestjs/common';
import { CreateChatroomDto } from './dto/create-chatroom.dto';
import { UpdateChatroomDto } from './dto/update-chatroom.dto';
import { IRepository } from "../infrastructure/iRepository";
import { Chatroom } from "./entities/chatroom.entity";

@Injectable()
export class ChatroomsService {
  constructor(private readonly chatRoomRepo: IRepository<Chatroom>) {}

  create(createObj: Chatroom) {
    return this.chatRoomRepo.create(createObj);
  }

  findAll() {
    return this.chatRoomRepo.getAll();
  }

  findOne(id: number) {
    return this.chatRoomRepo.getOne(id);
  }

  update(id: number, updateChatroomDto: UpdateChatroomDto) {
    return `This action updates a #${id} chatroom`;
  }

  remove(id: number) {
    this.chatRoomRepo.getOne(id).then((obj) => {
      return this.chatRoomRepo.delete(obj)
    });
  }
}
