import { Injectable } from "@nestjs/common";
import { IRepository } from "../../iRepository";
import { User } from "../../../users/entities/user.entity";
import { EntityManager, Repository } from "typeorm";
import { UsersSchema } from "./users.schema";

@Injectable()
export class UsersRepository implements IRepository<User> {
  private readonly userRepo: Repository<User>;

  constructor(private readonly em: EntityManager) {
    this.userRepo = em.getRepository(UsersSchema);
  }

  create(obj: User): Promise<User> {
    return this.userRepo.save<User>(obj);
  }

  delete(obj: User): Promise<User> {
    return this.userRepo.delete({
      id: obj.id
    })
  }

  getAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  getOne(id: number): Promise<User> {
    return this.userRepo.findOne({
      where: {
        id: id
      }
    });
  }

  update(obj: User): Promise<User> {
    this.delete(obj);
    this.create(obj);
  }

}