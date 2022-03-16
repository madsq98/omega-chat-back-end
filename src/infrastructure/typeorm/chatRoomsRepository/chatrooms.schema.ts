import { EntitySchema } from "typeorm";
import { Chatroom } from "../../../chatrooms/entities/chatroom.entity";
import { User } from "../../../users/entities/user.entity";

export const ChatroomsSchema = new EntitySchema<Chatroom>({
  name: 'Chatroom',
  target: Chatroom,
  columns: {
    id: {
      type: 'uuid',
      generated: 'uuid',
      primary: true
    },
    title: {
      type: 'varchar',
      unique: true
    },
  },
  relations: {
    owner: {
      type: "one-to-one",
      target: 'User',
      eager: true,
      joinColumn: {
        referencedColumnName: 'id'
      }
    }

  }
});
