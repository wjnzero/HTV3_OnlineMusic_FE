import {Component, OnInit} from '@angular/core';
import {Song} from "../../model/song";
import {SongService} from "../../service/song.service";
import {HttpService} from "../../service/htth-service.service";

@Component({
  selector: 'app-list-song',
  templateUrl: './list-song.component.html',
  styleUrls: ['./list-song.component.css']
})
export class ListSongComponent implements OnInit{

  songs: Song[] = [];
  userId:any;
  constructor(private songService: SongService,
              private httpService:HttpService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.songService.getAll().subscribe(songs => {
      this.songs = songs;
      this.userId = Number(this.httpService.getID());

    });
  }
  delete(id: any) {
    if (confirm('Bạn có muốn xóa?')) {
      this.songService.delete(id).subscribe(() => {
        alert("Ok");
        this.getAll()
      }, e => {
        console.error(e)
      });
    }
  }
}


