import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  UseGuards,
  UnauthorizedException
} from "@nestjs/common";
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from "@nestjs/passport";

@Controller('users')
export class UsersController {
  constructor(
    @Inject('UsersService') private readonly usersService: UsersService
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('/login')
  async login(@Body() dto: CreateUserDto) {
    let result = await this.usersService.login(dto.username, dto.password);
    if(result != undefined)
      return result;
    else
      return { id: 'null', username: '', password: '' }
  }

  @Get()
  @UseGuards(AuthGuard('basic'))
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('basic'))
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }
}
