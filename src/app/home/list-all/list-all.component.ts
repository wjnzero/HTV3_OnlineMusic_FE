import { Component, OnInit } from '@angular/core';
import {PlaylistService} from "../../service/playlist/playlist.service";
import {Playlist} from "../../model/playlist";
import {SongService} from "../../service/song/song.service";
import {Song} from "../../model/song";

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {


  songList: Song[] = [];
  playlists: Playlist[] = [];

  constructor(private songService: SongService,
              private playlistService: PlaylistService) {
  }

  ngOnInit(): void {
    this.songService.getAll().subscribe(res => {
      this.songList = res;
    });
    this.playlistService.getAll().subscribe(res => {
      this.playlists = res;
    });
  }
}
