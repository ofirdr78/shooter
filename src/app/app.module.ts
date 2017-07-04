import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    WeaponsComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
