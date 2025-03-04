import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { BooksInMemoryService } from '../../services/book-inmemory.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-create-book-page',
  templateUrl: './create-book-page.component.html',
  styleUrls: ['./create-book-page.component.css'],
  imports: [
    FormsModule
  ],
  standalone: true
})
export class CreateBookPageComponent {
  @Output() bookCreationEventEmitter = new EventEmitter<Book>();

  book = {
    title: '',
    author: '',
    description: '',
  };

  constructor(private booksService: BooksInMemoryService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const newBookId = this.booksService.createBook(this.book);

      const createdBook = this.booksService.getBookById(newBookId);

      if (createdBook) {
        this.bookCreationEventEmitter.emit(createdBook);
      }

      form.resetForm();
    }
  }
}
