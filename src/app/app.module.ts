import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import {HttpClientModule} from '@angular/common/http';
import { TodoNoteComponent } from './todo-note/todo-note.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightedDirective,
    NgxUnlessDirective,
    TodoNoteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
