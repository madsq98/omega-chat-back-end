import { User } from "../../users/entities/user.entity";

export class Chatroom {
  id: string;
  title: string;
  owner: User;
}
