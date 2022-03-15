import { Injectable } from "@nestjs/common";
import { IRepository } from "../../iRepository";
import { Chatroom } from "../../../chatrooms/entities/chatroom.entity";
import { DeleteResult, EntityManager, Repository } from "typeorm";
import { ChatroomsSchema } from "./chatrooms.schema";

@Injectable
export class ChatRoomsRepository implements IRepository<Chatroom> {
  private readonly chatRoomRepo: Repository<Chatroom>;

  constructor(private readonly em: EntityManager) {
    this.chatRoomRepo = em.getRepository(ChatroomsSchema);
  }

  create(obj: Chatroom): Promise<Chatroom> {
    return this.chatRoomRepo.save<Chatroom>(obj);
  }

  delete(obj: Chatroom): Promise<DeleteResult> {
    return this.chatRoomRepo.delete({
      id: obj.id
    });
  }

  getAll(): Promise<Chatroom[]> {
    return this.chatRoomRepo.find();
  }

  getOne(id: number): Promise<Chatroom> {
    return this.chatRoomRepo.findOne({
      where: {
        id: id
      }
    });
  }

  update(obj: Chatroom): Promise<Chatroom> {
    this.delete(obj);
    return this.create(obj);
  }

}
