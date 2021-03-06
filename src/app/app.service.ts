import { Injectable } from '@angular/core';
import { Weapon } from './app.module'

@Injectable()
export class AppService { 
weapons: Weapon[];
chosenWeapon: Weapon;
shots: { posX: number; posY: number }[];
audio: any;
newGame: boolean;

 constructor() {
   this.weapons = [{ name: "AK47", path: "/assets/ak47.jpg", sound: "/assets/ak47shot.mp3", hole: "/assets/ak47hole.png"},
                   { name: "Sniper Rifle", path: "/assets/rifle.jpg", sound: "/assets/rifleshot.mp3", hole: "/assets/riflehole.png"},
                   { name: "KSG", path: "/assets/ksg.jpg", sound: "/assets/ksgshot.mp3", hole: "/assets/ksghole.png"}
                   ];
  this.chosenWeapon = this.weapons[0];
  this.shots = [];  
  this.audio = new Audio();
  this.newGame = false;

 }
    
  getWeapons(): { name: string; path: string; sound: string; hole: string}[] { 
      return this.weapons; }

  changeWeapon(number) {
     this.chosenWeapon = this.weapons[number];
     if (!this.newGame) {
     this.audio.src = "/assets/selected.mp3";
     this.audio.load();
     this.audio.play();
     }
    
     
  }

   getWeapon(): Weapon { 
      return this.chosenWeapon; }

   addShot(X, Y) {
       this.shots.push({posX: X, posY: Y});
  }

   getShots(): { posX: number; posY: number }[] {
       return this.shots;
   }
 

  clearShots() {
       this.shots = [];
   }

  setNewGameTrue() {
      this.newGame = true;
  }
  setNewGameFalse() {
      this.newGame = false;
  }

}

  
