import { Injectable } from "@nestjs/common";
import { IRepository } from "../../iRepository";
import { Chat } from "../../../chats/entities/chat.entity";
import { DeleteResult, EntityManager, Repository } from "typeorm";
import { ChatsSchema } from "./chats.schema";

@Injectable()
export class ChatsRepository implements IRepository<Chat> {
  private readonly chatRepo: Repository<Chat>;

  constructor(private readonly em: EntityManager) {
    this.chatRepo = em.getRepository(ChatsSchema);
  }

  create(obj: Chat): Promise<Chat> {
    return this.chatRepo.save(obj);
  }

  delete(obj: Chat): Promise<DeleteResult> {
    return this.chatRepo.delete({
      id: obj.id
    });
  }

  getAll(): Promise<Chat[]> {
    return this.chatRepo.find();
  }

  getOne(id: number): Promise<Chat> {
    return this.chatRepo.findOne({
      where: {
        id: id
      }
    });
  }

  update(obj: Chat): Promise<Chat> {
    this.delete(obj);
    return this.create(obj);
  }


}