import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { BooksController } from './books/books.controller';

import { AppService } from './app.service';
import { BookService } from './books/book.service';
import { BookSchema } from './books/schemas/Book.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/CRUD_Nest', { useNewUrlParser: true }),
    MongooseModule.forFeature([
      { name: 'books', schema: BookSchema }
    ])
  ],
  controllers: [
    AppController, 
    BooksController
  ],
  providers: [
    AppService, 
    BookService
  ]
})
export class AppModule { }
