import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import IBook from './interface/Book.interface';

@Injectable()
export class BookService {

    constructor(
        @InjectModel('books') private readonly bookModel: Model<IBook>
    ) { }

    async findAll(): Promise<IBook[]> {
        return await this.bookModel.find();
    }

    async findById(id: string): Promise<IBook> {
        return await this.bookModel.findOne({ _id: id });
    }

    async createBook(book: IBook): Promise<IBook> {
        const newBook = this.bookModel(book);
        return await newBook.save();
    }

    async updateBook(id: string, book: IBook): Promise<IBook> {
        return await this.bookModel.findByIdAndUpdate(id, book, { new: true });
    }

    async deleteBook(id: string): Promise<IBook> {
        return await this.bookModel.findByIdAndRemove(id);
    }

}
