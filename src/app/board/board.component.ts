import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
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

  constructor(private _appService: AppService, private cdRef:ChangeDetectorRef) {

    this.shots = [];
    this.audio = new Audio();
    this.currentWeapon = this._appService.getWeapon();
    this.cdRef.markForCheck(); // make it check for changes

   
   }


  ngOnInit() { 
  }

  clicked($event) { 
    
     this.shots = this._appService.getShots();

    //  if (this.currentWeapon != this._appService.getWeapon()){
    //      this._appService.clearShots();
    //  }
     this.currentWeapon = this._appService.getWeapon();
     console.log(this._appService.getWeapon());
 
    this._appService.addShot($event.screenX, $event.screenY);

    // this.shotsChange.emit(this.shots.push(this.currentShot));
     this.audio.src = this.currentWeapon.sound;

    this.audio.load();
    this.audio.play();

  }

  newgame() {
    this.shots = [];
    this._appService.setNewGameTrue();
    this._appService.changeWeapon(0);
    this._appService.setNewGameFalse();
    this._appService.clearShots();


  }

}
