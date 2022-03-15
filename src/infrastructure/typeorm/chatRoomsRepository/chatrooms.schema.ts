import { EntitySchema } from "typeorm";
import { Chatroom } from "../../../chatrooms/entities/chatroom.entity";

export const ChatroomsSchema = new EntitySchema<Chatroom>({
  name: 'Chatrooms',
  target: Chatroom,
  columns: {
    id: {
      type 'uuid',
      generated 'uuid',
      primary: true
    },
    title: {
      type: 'varchar',
      unique: true
    }
  },
  relations: {}
});
