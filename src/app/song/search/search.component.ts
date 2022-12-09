import { Component, OnInit } from '@angular/core';
import {Song} from "../../model/song";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {SongService} from "../../service/song/song.service";

@Component({
  selector: 'app-search',
  templateUrl: "./search.component.html",
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // @ts-ignore
  songs: Song;

  constructor(
    private activateRoute: ActivatedRoute,
    private songService: SongService) {
  }

  ngOnInit(): void {
    this.songs = {
      name: '', describeSong: '', avatar: '', author: '', singer: '', album: '', view: ''
    }

    this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
      const id = paraMap.get('id');
      this.getByName(id);
    });
  }

  getByName(id: any) {
    this.songService.getById(id).subscribe((yy: Song) => {
      this.songs = yy;
    })
  }
}

  // search: string;
  // songs: Song[] = [];
  // playLists: Playlist[] = [];
  // p: any;
  // page: any;
  //
  // constructor(private songService: SongService,
  //             private playlistService: PlaylistService,
  //             private activatedRoute: ActivatedRoute) { }
  //
  // ngOnInit(): void {
  //   this.activatedRoute.queryParams.subscribe(params => {
  //     this.search = params['name'];
  //     this.songService.getByName(this.search).subscribe((res: Song[]) => {
  //       this.songs = res;
  //     });
  //     this.playlistService.getPlaylistByName(this.search).subscribe(res => {
  //       this.playLists = res;
  //     });
  //   });
  // }
  // getAllSong() {
  //   this.songService.getAll().subscribe((data: any) => this.songs = data);
  // }
  //
  // Search() {
  //   if (this.search == "") {
  //     this.getAllSong()
  //   } else {
  //     this.songService.getByName(this.search).subscribe(data => {
  //       console.log(data);
  //       this.songs = data;
  //     })
  //   }
//   // }
// }

