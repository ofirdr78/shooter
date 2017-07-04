import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  audio: any;
  shots: { posX: number; posY: number }[];
  currentShot: { posX: number; posY: number };

  constructor() {
    this.shots = [];
    this.audio = new Audio();
    this.audio.src = "/assets/ak47shot.mp3";
    this.audio.load();

   }

  ngOnInit() {
  }

  clicked($event) {
    this.currentShot = { posX: $event.screenX, posY: $event.screenY };
    this.shots.push(this.currentShot);
    this.audio.play();

  }
}
