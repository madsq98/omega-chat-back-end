import { ApiProperty } from "@nestjs/swagger";

export class UpdateChatroomDto {
  @ApiProperty()
  title: string;
}
