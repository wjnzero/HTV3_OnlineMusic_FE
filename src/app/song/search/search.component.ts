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
  songs: Song[] = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private songService: SongService) {
  }

  ngOnInit(): void {
    this.songs = {
      // @ts-ignore
      name: '', describeSong: '', avatar: '', author: '', singer: '', album: '', view: ''
    }

    this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
      const id = paraMap.get('id');
      this.getByName(id);
    });
  }

  getByName(id: any) {
    this.songService.getById(id).subscribe((yy: Song) => {
      // @ts-ignore
      this.songs = yy;
    })
  }
  getAll() {
    this.songService.getAll().subscribe(songs => {
      this.songs = songs;
    });
  }
  delete(id: any) {
    if (confirm('Bạn có muốn xóa?')) {
      this.songService.delete(id).subscribe(data => {
        console.log(data)
        alert("Ok");
        this.getAll()
      }, e => {
        console.error(e)
      });
    }
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

