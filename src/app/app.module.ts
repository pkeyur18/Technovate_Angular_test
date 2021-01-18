import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrentComponent } from './components/current/current.component';
import { NextComponent } from './components/next/next.component';
import { PrevComponent } from './components/prev/prev.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentComponent,
    NextComponent,
    PrevComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
