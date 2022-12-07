import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SongService} from "../../service/song.service";

@Component({
  selector: 'app-song-list-song',
  templateUrl: './list-song.component.html',
  styleUrls: ['./list-song.component.css']
})
export class ListSongComponent implements OnInit {
  list: any;

  constructor(private httpClient: HttpClient,
              private songService: SongService)  {
  }

  ngOnInit(): void {
    this.songService.getAll().subscribe((result: any) => {
      this.list = result;
      console.log(result);
    }, (error: any) => {
      console.log(error)
    });
  }
  sortByView(){
    this.songService.sortByView().subscribe((result: any) => {
      this.list = result;
      console.log(result);
    }, (error: any) => {
      console.log(error)
    })
  }
  sortByViewDesc(){
    this.songService.sortByViewDesc().subscribe((result: any) => {
      this.list = result;
      console.log(result);
    }, (error: any) => {
      console.log(error)
    })
  }
}
