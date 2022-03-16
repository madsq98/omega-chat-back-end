import { Request, Controller, Get, Post, Body, Patch, Param, Delete, Inject, UseGuards } from "@nestjs/common";
import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { AuthGuard } from "@nestjs/passport";
import { Chat } from "./entities/chat.entity";

@Controller('chats')
export class ChatsController {
  constructor(
    @Inject('ChatsService') private readonly chatsService: ChatsService
  ) {}

  @Post()
  @UseGuards(AuthGuard('basic'))
  create(@Request() req, @Body() createChatDto: CreateChatDto) {
    let newObj = {
      message: createChatDto.message,
      sender: {
        id: req.user.id
      },
      chatroom: {
        id: createChatDto.chatroomId
      }
    } as Chat;
    return this.chatsService.create(newObj);
  }

  @Get()
  @UseGuards(AuthGuard('basic'))
  findAll() {
    return this.chatsService.findAll();
  }

  //Get all chats from specific chatroom
  @Get(':id')
  @UseGuards(AuthGuard('basic'))
  findOne(@Param('id') id: string) {
    return this.chatsService.findAllInRoom(id);
  }
}
