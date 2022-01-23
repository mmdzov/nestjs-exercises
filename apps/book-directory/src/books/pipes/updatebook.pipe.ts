/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ArgumentMetadata,
  HttpException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { AddBookSchema } from '../validation/addbook.validation';

@Injectable()
export class UpdateBookPipe implements PipeTransform {
  async transform(book: any, metadata: ArgumentMetadata) {
    const { error, value } = AddBookSchema.validate(book, {
      convert: true,
    });

    if (error) {
      throw new HttpException(
        {
          type: 'INVALID_VALUE',
          message: error.message.split('"').join(''),
        },
        400,
      );
    }
    return value;
  }
}
