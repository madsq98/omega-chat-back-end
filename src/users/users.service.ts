import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUsersRepository } from '../infrastructure/iUsersRepository';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
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

  findOne(id: number) {
    return this.userRepo.getOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    this.userRepo.getOne(id).then((obj) => {
      return this.userRepo.delete(obj);
    });
  }
}
