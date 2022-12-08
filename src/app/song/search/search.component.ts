import { Component, OnInit } from '@angular/core';
import {Song} from "../../model/song";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {SongService} from "../../service/song.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  // @ts-ignore
  song: Song;

  constructor(
    private activateRoute: ActivatedRoute,
    private songService: SongService) {
  }

  ngOnInit():void{
    this.song = {
      name: '', describeSong: '', avatar: '',author: '', singer: '', album: '', view:''}

    this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
      const id = paraMap.get('id');
      this.getByName(id);
    });
  }

  getByName(id: any) {
    this.songService.getById(id).subscribe((yy: Song) => {
      this.song = yy;
    })
  }
}

