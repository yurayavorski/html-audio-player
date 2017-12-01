import { Component, OnInit } from '@angular/core';
import {CommonService} from "../shared/common.service";
import {Music} from "../shared/music";
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  Title = "Playlist";
  Musics: Music[];
  constructor(private service: CommonService) {
    this.Musics = this.service.Musics;
  }
  ngOnInit() {
  }

}
