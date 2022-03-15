import { Injectable } from "@nestjs/common";
import { User } from "../../../users/entities/user.entity";
import { DeleteResult, EntityManager, Repository } from "typeorm";
import { UsersSchema } from "./users.schema";
import { IUsersRepository } from "../../iUsersRepository";

@Injectable()
export class UsersRepository implements IUsersRepository {
  private readonly userRepo: Repository<User>;

  constructor(private readonly em: EntityManager) {
    this.userRepo = em.getRepository(UsersSchema);
  }

  create(obj: User): Promise<User> {
    return this.userRepo.save<User>(obj);
  }

  delete(obj: User): Promise<DeleteResult> {
    return this.userRepo.delete({
      id: obj.id
    });
  }

  getAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  getOne(id: string): Promise<User> {
    return this.userRepo.findOne({
      where: {
        id: id
      }
    });
  }

  getOneByUserAndPass(username: string, password: string) {
    return this.userRepo.findOne({
      where: {
        username: username,
        password: password
      }
    });
  }

  update(obj: User): Promise<User> {
    this.delete(obj);
    return this.create(obj);
  }
}
