import { ApiProperty } from '@nestjs/swagger';

export class CreateChatroomDto {
  @ApiProperty()
  title: string;
}
