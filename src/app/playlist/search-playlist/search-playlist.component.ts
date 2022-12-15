import { Component } from '@angular/core';
import {Playlist} from "../../model/playlist";
import {PlaylistService} from "../../service/playlist/playlist.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search-playlist',
  templateUrl: './search-playlist.component.html',
  styleUrls: ['./search-playlist.component.css']
})
export class SearchPlaylistComponent {
  playlists: Playlist[] = [];
  name?: string;

  constructor(private playlistService: PlaylistService, private activateRoute: ActivatedRoute) {
    this.activateRoute.queryParams.subscribe((params => {
      // @ts-ignore
      this.name = params.name;
      this.getByName(this.name);
      console.log(this.playlists)
    }))
  }


  ngOnInit() {
  }

  getByName(name: string | undefined) {
    this.playlistService.getByName(name).subscribe(playlists => {
      this.playlists = playlists;
    });
  }
}
