/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ArgumentMetadata,
  HttpException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { AddBookSchema } from '../validation/addbook.validation';
import { AddBookDto } from './../dto/addbook.dto';

@Injectable()
export class AddBookPipe implements PipeTransform {
  async transform(book: AddBookDto, { metatype }: ArgumentMetadata) {
    if (typeof book.pages !== 'number') {
      throw new HttpException(
        {
          type: 'INVALID_TYPE_PAGE',
        },
        400,
      );
    }

    const { error, value } = AddBookSchema.validate(book, {
      convert: true,
    });

    if (error) {
      throw new HttpException(
        {
          type: 'INVALID_DATA',
          message: error.message.split('"').join(''),
        },
        400,
      );
    }

    return value;
  }
}
