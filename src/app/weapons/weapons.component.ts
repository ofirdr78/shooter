import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppService } from '../app.service';  

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {
  @Input() shots;
  @Output() shotsChange = new EventEmitter();
 
  value: { name: string; path: string; sound: string; hole: string}[];
  currentWeapon: number;
  indexWeapon: number; 
  constructor(private _appService: AppService) {
      // this.weapons = [{ name: "AK47", path: "/assets/ak47.jpg", sound: "/assets/ak47shot.mp3", hole: "/assets/ak47hole.png"},
      //                 { name: "Sniper Rifle", path: "/assets/rifle.jpg", sound: "/assets/rifleshot.mp3", hole: "/assets/riflehole.png"}];
      this.currentWeapon = 0;
      this.indexWeapon = 0;
   }

  ngOnInit() {
     this.value=this._appService.getWeapons();
  }
 
   weaponNumber(i: number) {
   this._appService.changeWeapon(i);
   this.indexWeapon = i;
   this._appService.clearShots();

  }
   
}
