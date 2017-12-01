import { Component, OnInit } from '@angular/core';
import {CommonService} from "../shared/common.service";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  CurrentTime: number = 20;
  isControllerLocked: boolean = false;
  constructor(private service: CommonService) {

  }
  ngOnInit() {
    this.service.Audio.ontimeupdate = this.OnTimeUpdate(this.service.Audio);
    setInterval( function () {
      this.OnTimeUpdate(this.service.Audio);
    }.bind(this), 5);
  }
  Play():void {
    this.service.PlayMusic();
  }
  Pause():void {
    this.service.PauseMusic();
  }
  ChangeVolume(volValue):void {
    this.service.Audio.volume = volValue/100;
  }
  NextSong():void {
    this.service.NextSong();
  }
  PrevSong():void {
    this.service.PrevSong();
  }
  Durations(): number {
    return this.service.Audio.duration || 100;
  }
  ChangeTime(time):void {
    this.service.Audio.currentTime = time;
    this.isControllerLocked = false;
  }
  OnTimeUpdate(audio):any {
    if (!this.isControllerLocked)
      this.CurrentTime = this.service.Audio.currentTime;
  }
  GetCurrentTime(): number {
    return this.CurrentTime || 1;
  }
  OnLocked() {
    this.isControllerLocked = true;
  }
}


