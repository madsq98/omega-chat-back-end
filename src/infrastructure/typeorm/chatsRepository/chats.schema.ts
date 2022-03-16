import { EntitySchema } from "typeorm";
import { Chat } from "../../../chats/entities/chat.entity";

export const ChatsSchema = new EntitySchema<Chat>({
  name: 'Chat',
  target: Chat,
  columns: {
    id: {
      type: 'uuid',
      generated: 'uuid',
      primary: true
    },
    message: {
      type: 'varchar'
    }
  },
  relations: {
    sender: {
      type: "one-to-one",
      target: 'User',
      eager: true,
      joinColumn: {
        referencedColumnName: 'id'
      }
    },
    chatroom: {
      type: "one-to-one",
      target: 'Chatroom',
      eager: true,
      joinColumn: {
        referencedColumnName: 'id'
      }
    }
  }
});