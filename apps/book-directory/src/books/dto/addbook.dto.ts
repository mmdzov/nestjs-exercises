import { ApiProperty } from '@nestjs/swagger';

export class AddBookDto {
  @ApiProperty({ type: 'string' })
  readonly name: string;

  @ApiProperty({ type: 'string' })
  readonly author: string;

  @ApiProperty({ type: 'number' })
  readonly pages: string;
}
