import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   shots: { posX: number; posY: number }[];
   weapons: { name: string; path: string; sound: string, hole: string }[];
   currentWeapon: { name: string; path: string; sound: string, hole: string };
   
}
