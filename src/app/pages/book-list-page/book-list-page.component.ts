import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { RouterLink } from '@angular/router';
import { BooksApiService } from "../../services/books-api.service";

@Component({
  selector: 'app-book-list-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-list-page.component.html',
  styleUrls: ['./book-list-page.component.css'],
})
export class BookListPageComponent implements OnInit {
  private readonly bookService = inject(BooksApiService);
  books: Book[] = [];

  ngOnInit() {
    this.bookService.getAllBooks().subscribe((data) => {
      this.books = data;
    });
  }
}
