import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../model/note';
import { NotesService } from '../services/notes.service';
import { Category } from '../model/category';

@Component({
  selector: 'todo-note',
  templateUrl: './todo-note.component.html',
  styleUrls: ['./todo-note.component.css']
})
export class TodoNoteComponent implements OnInit {

  @Input()
  note: Note;

  @Input()
  category: Category;

  @Output('noteChanged')
  noteEmitter = new EventEmitter<Note>();

  @Output('categoryChanged')
  categoryEmitter = new EventEmitter<Category>();

  constructor(private notesService : NotesService) { }

  ngOnInit(): void {
  }

  onSaveClicked(description:string) {

    this.noteEmitter.emit({...this.note, description});

}

}
