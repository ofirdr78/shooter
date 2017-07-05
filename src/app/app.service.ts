import { Injectable } from '@angular/core';


@Injectable()
export class AppService {
weapons: { name: string; path: string; sound: string; hole: string}[];
chosenWeapon: { name: string; path: string; sound: string; hole: string};

 constructor() {
   this.weapons = [{ name: "AK47", path: "/assets/ak47.jpg", sound: "/assets/ak47shot.mp3", hole: "/assets/ak47hole.png"},
                   { name: "Sniper Rifle", path: "/assets/rifle.jpg", sound: "/assets/rifleshot.mp3", hole: "/assets/riflehole.png"}];
  this.chosenWeapon = this.weapons[0];

 }
    
  getApp(): { name: string; path: string; sound: string; hole: string}[] { 
      return this.weapons }

  changeWeapon(number) {
     this.chosenWeapon = this.weapons[number];
     console.log(this.chosenWeapon.name);
  }

   getWeapon(): { name: string; path: string; sound: string; hole: string} { 
      return this.chosenWeapon }
}
