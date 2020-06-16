import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

import { HighlightedDirective } from './directives/highlighted.directive';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Note } from './model/note';
import { NotesService } from './services/notes.service';
import { Category } from './model/category';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todoItems$: Observable<Note[]>;
  categories$: Observable<Category[]>;
  constructor(private notesService: NotesService) {


  }

  ngOnInit() {
    this.categories$ = this.notesService.loadCategories();
    this.todoItems$ = this.notesService.loadNotes();
  }

  saveNote(note: Note) {
    this.notesService.saveNotes(note).subscribe(() => console.log('Course Saved!'))
  }
  saveCategory(category: Category) {
    this.notesService.saveCategories(category).subscribe(() => console.log('Course Saved!'))
  }
}