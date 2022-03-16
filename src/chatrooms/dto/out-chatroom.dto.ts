import { ApiProperty } from '@nestjs/swagger';

export class OutChatroomDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  ownerId: string;
}