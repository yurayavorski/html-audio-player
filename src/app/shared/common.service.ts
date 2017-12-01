import { Injectable, OnInit } from '@angular/core';
import { musics } from "./musics";
import {Music} from "./music";
@Injectable()
export class CommonService implements OnInit{
  Audio: HTMLAudioElement;
  Musics: Music[] = musics;
  Current: Music = musics[0];
  Path: string = "/assets/music/";
  constructor() {
    this.Audio = new Audio( this.Path + this.Current.Name);
    this.Current.isPlaying = true;
  }
  ngOnInit() {

  }
  PlayMusic():void {
    this.Audio.play();
  }
  PauseMusic():void {
    this.Audio.pause();
  }
  ChangeSong(index: number): boolean {
    if ( (index <= this.Musics.length - 1) && (index >= 0) ) {
      this.Audio.pause();
      this.Current.isPlaying = false;
      this.Current = this.Musics[index];
      this.Current.isPlaying = true;
      this.Audio = new Audio(this.Path + this.Current.Name);
      setTimeout(() => this.PlayMusic(), 50);
      return true;
    }
    return false;
  }
  NextSong():boolean {
    let index = this.Musics.indexOf(this.Current)
    return this.ChangeSong(index + 1);
  }
  PrevSong():boolean {
    let index = this.Musics.indexOf(this.Current)
    return this.ChangeSong(index - 1);
  }


}
