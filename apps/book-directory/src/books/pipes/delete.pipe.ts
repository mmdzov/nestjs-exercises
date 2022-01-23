/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ArgumentMetadata,
  HttpException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { BooksService } from '../books.service';

@Injectable()
export class DeleteBookPipe implements PipeTransform {
  constructor(private bookService: BooksService) {}
  async transform(value: any, metadata: ArgumentMetadata) {
    try {
      await this.bookService.getBook(value);
      return value;
    } catch (e) {
      throw new HttpException(
        {
          status: 400,
          type: 'INVALID_TYPE_ID',
        },
        400,
      );
    }
  }
}
