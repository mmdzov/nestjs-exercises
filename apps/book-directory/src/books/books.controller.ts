import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
  UsePipes,
} from '@nestjs/common';
import { ApiBody, ApiParam, ApiProperty } from '@nestjs/swagger';
import { Response } from 'express';
import { BooksService } from './books.service';
import { AddBookDto } from './dto/addbook.dto';
import { AddBookPipe } from './pipes/addbook.pipe';
import { DeleteBookPipe } from './pipes/delete.pipe';
import { UpdateBookPipe } from './pipes/updatebook.pipe';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Post()
  @UsePipes(new AddBookPipe())
  @ApiBody({ type: AddBookDto })
  async addBook(@Body() book: AddBookDto) {
    const added = await this.booksService.addBook(book);
    return added;
  }

  @Get('/get')
  async getBooks() {
    const books = await this.booksService.getBooks();
    return books;
  }

  @Get('/get/:id')
  async getBook(@Param('id') id: string) {
    console.log(id);
    const result = await this.booksService.getBook(id);
    return result;
  }

  @Post('/update/:id')
  @ApiProperty({ type: AddBookDto })
  async updateBook(
    @Param('id') id: string,
    @Body(new UpdateBookPipe()) book: AddBookDto,
  ) {
    const result = await this.booksService.updateBook(id, book);
    return result;
  }

  @Delete('/del/:id')
  @UsePipes(DeleteBookPipe)
  @ApiParam({ name: 'id', type: 'string' })
  async deleteBook(@Param('id') id: string, @Res() res: Response) {
    const result = await this.booksService.deleteBook(id);
    if (result)
      return res.status(200).json({
        message: 'successfully deleted!',
        type: 'DELETED',
      });

    return res.status(400).json({
      message: "can't delete book",
      type: 'FAIL_DELETE',
    });
  }
}
