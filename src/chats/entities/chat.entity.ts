import { Chatroom } from "../../chatrooms/entities/chatroom.entity";
import { User } from "../../users/entities/user.entity";

export class Chat {
  id: string;
  message: string;
  chatroom: Chatroom;
  sender: User;
}
