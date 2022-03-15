import { DeleteResult } from "typeorm";
import { User } from "../users/entities/user.entity";

export interface IUsersRepository {
  create(obj: User): Promise<User>,

  update(obj: User): Promise<User>;

  delete(obj: User): Promise<DeleteResult>;

  getOne(id: string): Promise<User>;

  getOneByUserAndPass(username: string, password: string);

  getAll(): Promise<User[]>;
}
