import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { BoardComponent } from './board/board.component';
import { AppService } from './app.service';  

@NgModule({
  declarations: [
    AppComponent,
    WeaponsComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class Weapon {
  name: string;
   path: string; 
   sound: string; 
   hole: string
}
