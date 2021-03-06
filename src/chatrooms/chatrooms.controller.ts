import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, UseGuards, Request, SetMetadata } from "@nestjs/common";
import { ChatroomsService } from './chatrooms.service';
import { CreateChatroomDto } from './dto/create-chatroom.dto';
import { UpdateChatroomDto } from './dto/update-chatroom.dto';
import { UsersService } from "../users/users.service";
import { AuthGuard } from "@nestjs/passport";
import { Chatroom } from "./entities/chatroom.entity";
import { OutChatroomDto } from "./dto/out-chatroom.dto";

@Controller('chatrooms')
export class ChatroomsController {
  constructor(
    @Inject('ChatroomsService') private readonly chatroomsService: ChatroomsService
  ) {}

  @Post()
  @UseGuards(AuthGuard('basic'))
  create(@Request() req, @Body() createChatroomDto: CreateChatroomDto) {
    let newObj = {
      title: createChatroomDto.title,
      owner: {
        id: req.user.id
      }
    } as Chatroom;
    return this.chatroomsService.create(newObj);
  }

  @Get()
  @UseGuards(AuthGuard('basic'))
  async findAll() {
    return this.chatroomsService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('basic'))
  findOne(@Param('id') id: string) {
    return this.chatroomsService.findOne(+id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('basic'))
  remove(@Param('id') id: string) {
    return this.chatroomsService.remove(+id);
  }
}
