import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppService } from '../app.service';  

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  audio: any;
  
  currentShot: { posX: number; posY: number };

  shots: { posX: number; posY: number }[];
  

  currentWeapon: { name: string; path: string; sound: string; hole: string};

  constructor(private _appService: AppService) {

    this.shots = [];
    this.audio = new Audio();
    this.currentWeapon = this._appService.getWeapon();
   
   }

  ngOnInit() { 
  }

  clicked($event) { 
     this.shots = this._appService.getShots();

     if (this.currentWeapon != this._appService.getWeapon()){
         this._appService.clearShots();
     }
     this.currentWeapon = this._appService.getWeapon();
     console.log(this._appService.getWeapon());
 
    let x = $event.screenX;
    let y = $event.screenY
    this._appService.addShot(x, y);

    // this.shotsChange.emit(this.shots.push(this.currentShot));
     this.audio.src = this.currentWeapon.sound;

    this.audio.load();
    this.audio.play();

  }

  newgame() {
    this._appService.changeWeapon(0);
    this._appService.clearShots();
    this.shots = [];

  }

}
