import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    BooksModule,
    MongooseModule.forRoot('mongodb://localhost/book-directory'),
  ],
})
export class BookDirectoryModule {}
