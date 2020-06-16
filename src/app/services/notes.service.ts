import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from '../model/note';
import { Observable } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }

  loadNotes(): Observable<Note[]> {

   // const params = new HttpParams().set("page", "1").set("pageSize", "10");
    return this.http.get<Note[]>('/api/notes');
  }

  loadCategories(): Observable<Category[]> {

    // const params = new HttpParams().set("page", "1").set("pageSize", "10");
     return this.http.get<Category[]>('/api/categories');
   }

  saveNotes(note: Note) {

    const headers = new HttpHeaders().set("X-Auth", "userId");

    return this.http.put(`/api/notes/${note.id}`, note, {headers});
  }

  saveCategories(category: Category) {

    const headers = new HttpHeaders().set("X-Auth", "userId");

    return this.http.put(`/api/categories/${category.id}`, category, {headers});
  }
}
