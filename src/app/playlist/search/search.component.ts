import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PlaylistService} from "../../service/playlist/playlist.service";
import {Playlist} from "../../model/playlist";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
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
