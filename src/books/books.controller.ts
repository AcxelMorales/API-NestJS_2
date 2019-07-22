import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import IBook from './interface/Book.interface';
import { BookDTO } from './dto/Book';
import { BookService } from './book.service';

@Controller('books')
export class BooksController {

    constructor(
        private _bookService: BookService
    ) { }

    @Get()
    getAllBooks(): Promise<IBook[]> {
        return this._bookService.findAll();
    }

    @Get(':id')
    getOneBook(@Param('id') id: string): Promise<IBook> {
        return this._bookService.findById(id);
    }

    @Post()
    postBook(@Body() bookDTO: BookDTO): Promise<IBook> {
        return this._bookService.createBook(bookDTO);
    }

    @Put(':id')
    putBook(@Param('id') id: string, @Body() bookDTO: BookDTO): Promise<IBook> {
        return this._bookService.updateBook(id, bookDTO);
    }

    @Delete(':id')
    deleteBook(@Param('id') id: string): Promise<IBook> {
        return this._bookService.deleteBook(id);
    }

}

