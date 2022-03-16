import { Injectable } from "@nestjs/common";
import { IRepository } from "../../iRepository";
import { Chat } from "../../../chats/entities/chat.entity";
import { DeleteResult, EntityManager, Repository } from "typeorm";
import { ChatsSchema } from "./chats.schema";
import { IChatsRepository } from "../../iChatsRepository";

@Injectable()
export class ChatsRepository implements IChatsRepository {
  private readonly chatRepo: Repository<Chat>;

  constructor(private readonly em: EntityManager) {
    this.chatRepo = em.getRepository(ChatsSchema);
  }

  create(obj: Chat): Promise<Chat> {
    return this.chatRepo.save(obj);
  }

  getAll(): Promise<Chat[]> {
    return this.chatRepo.find();
  }

  getAllFromChatRoom(id: string): Promise<Chat[]> {
    return this.chatRepo.find({
      where: {
        chatroom: id
      }
    })
  }
}