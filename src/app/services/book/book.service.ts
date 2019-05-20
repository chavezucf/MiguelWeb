import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Book {
  author: string;
  link: string;
  summary: string;
  title: string;
  index: number;
  id?: string;
}


@Injectable()
export class BookService {
  booksCollections: AngularFirestoreCollection<Book>;
  books: Observable<Book[]>;
  constructor(private afs: AngularFirestore) { }

  getBooks(){
    this.booksCollections = this.afs.collection('books', ref => {
      return ref.orderBy('index')
    });
    this.books = this.booksCollections.valueChanges();
    return this.books
  }

}
