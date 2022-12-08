import { Component } from '@angular/core';
import {Song} from "../../model/song";
import {Playlist} from "../../model/playlist";
import {SongService} from "../../service/song.service";
import {PlaylistService} from "../../service/playlist.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  search: string | undefined;
  songLists: Song[] = [];
  playLists: Playlist[] = [];
  p: number | undefined;
  page: number | undefined;

  constructor(private songService: SongService,
              private playlistService: PlaylistService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.search = params['name'];
      this.songService.getByName(this.search).subscribe(res => {
        this.songLists = res;
      });
      this.playlistService.getPlaylistByName(this.search).subscribe(res => {
        this.playLists = res;
      });
    });
  }
}
