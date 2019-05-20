import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Note {
  content: string;
  hearts: number;
  id?: string;
}

interface Book {
  author: string;
  link: string;
  summary: string;
  title: string;
  index: number;
  id?: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notesCollections: AngularFirestoreCollection<Note>;
  notes: Observable<Note[]>;

  booksCollections: AngularFirestoreCollection<Book>;
  books: Observable<Book[]>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.booksCollections = this.afs.collection('books', ref => {
      return ref.orderBy('index')
    })
    this.books = this.booksCollections.valueChanges()
  }

}
