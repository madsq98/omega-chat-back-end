import { EntitySchema } from "typeorm";
import { User } from "../../../users/entities/user.entity";

export const UsersSchema = new EntitySchema<User>({
  name: 'Users',
  target: User,
  columns: {
    id: {
      type: 'uuid',
      generated: 'uuid',
      primary: true
    },
    username: {
      type: 'varchar',
      unique: true
    },
    password: {
      type: 'varchar'
    }
  },
  relations: {}
});