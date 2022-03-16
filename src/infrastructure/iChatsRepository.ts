import { Chat } from "../chats/entities/chat.entity";

export interface IChatsRepository {
  create(obj: Chat): Promise<Chat>;

  getAllFromChatRoom(id: string): Promise<Chat[]>;

  getAll(): Promise<Chat[]>;
}