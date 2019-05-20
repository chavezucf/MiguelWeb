import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../../services/book/book.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Observable<Book[]>;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

}

