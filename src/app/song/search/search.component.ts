import {Component, OnInit} from '@angular/core';
import {Song} from "../../model/song";
import {ActivatedRoute} from "@angular/router";
import {SongService} from "../../service/song/song.service";
import {SongType} from "../../model/songType";


@Component({
  selector: 'app-search',
  templateUrl: "./search.component.html",
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  songs: Song[] = [];
  songType: SongType[] = [];
  name?: string;

  constructor(private songService: SongService, private activateRoute: ActivatedRoute) {
    this.activateRoute.queryParams.subscribe((params => {
      // @ts-ignore
      this.name = params.name;
      this.getByName(this.name);
      this.getSongByAuthor(this.name);
      this.getSongBySinger(this.name);
      console.log(this.songs)
    }))
  }


  ngOnInit() {
  }

  getByName(name: string | undefined) {
    this.songService.getByName(name).subscribe(songs => {
      this.songs = songs;
    });
  }

  getSongByAuthor(name: string | undefined) {
    this.songService.getSongByAuthor(name).subscribe(songs => {
      this.songs = songs;
    })
  }

  getSongBySinger(name: string | undefined) {
    this.songService.getSongBySinger(name).subscribe(songs => {
      this.songs = songs;
    })
  }
}
