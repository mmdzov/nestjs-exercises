import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddBookDto } from './dto/addbook.dto';
import { Book, BookDocument } from './schemas/book.schema';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private model: Model<BookDocument>) {}

  async addBook(book: AddBookDto): Promise<BookDocument> {
    const result = await this.model.create<AddBookDto>(book);
    return result;
  }

  async getBooks(): Promise<BookDocument[]> {
    const result = await this.model.find({}).select('-__v');
    return result;
  }

  async getBook(id: string): Promise<BookDocument> {
    const result = await this.model.findOne({ _id: id }).select('-__v');
    return result;
  }

  async updateBook(id: string, update: AddBookDto): Promise<BookDocument> {
    const result = await this.model
      .findOneAndUpdate({ _id: id }, update, {
        new: true,
      })
      .select('-__v');
    return result;
  }

  async deleteBook(id: string): Promise<boolean> {
    try {
      const result = await this.model.findOneAndRemove({ _id: id });
      if (!result) return false;
      return true;
    } catch (e) {
      return false;
    }
  }
}
