import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppService } from '../app.service';  

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [AppService] 
})
export class BoardComponent implements OnInit {
  audio: any;
  
  currentShot: { posX: number; posY: number };

  @Input() shots;
  @Output() shotsChange = new EventEmitter();

  currentWeapon: { name: string; path: string; sound: string; hole: string};

  mousePressed: boolean;

  constructor(private _appService: AppService) {
    this.mousePressed = false;
    this.shots = [];
    this.audio = new Audio();
    this.currentWeapon = this._appService.getWeapon();
   

   }

  ngOnInit() { 
  }

  clicked($event) {
     this.currentWeapon = this._appService.getWeapon();
     console.log(this._appService.getWeapon());


    this.mousePressed = true;
    this.currentShot = { posX: $event.screenX, posY: $event.screenY };
    this.shotsChange.emit(this.shots.push(this.currentShot));
     this.audio.src = this.currentWeapon.sound;

      this.audio.load();
    this.audio.play();

  }

  newgame() {
    this.shotsChange.emit(this.shots= []);

  }

}
