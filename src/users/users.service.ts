import { Injectable, Scope } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { IUsersRepository } from "../infrastructure/iUsersRepository";
import { User } from "./entities/user.entity";

@Injectable({ scope: Scope.REQUEST })
export class UsersService {
  private currentUser: User | undefined;

  constructor(private readonly userRepo: IUsersRepository) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepo.create({
      username: createUserDto.username,
      password: createUserDto.password,
    } as User);
  }

  findAll() {
    return this.userRepo.getAll();
  }

  findOne(id: string) {
    return this.userRepo.getOne(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    this.userRepo.getOne(id).then((obj) => {
      return this.userRepo.delete(obj);
    });
  }

  async login(username: string, password: string): Promise<User> {
    this.currentUser = await this.userRepo.getOneByUserAndPass(username, password);
    return this.currentUser;
  }

  getCurrentUser(): User {
    return this.currentUser;
  }
}
