import {Component, OnInit} from '@angular/core';
import {Song} from "../../model/song";
import {SongService} from "../../service/song/song.service";
import {SongType} from "../../model/songType";
import {SongTemp} from "../../model/songTemp";
import {Playlist} from "../../model/playlist";
import {PlaylistService} from "../../service/playlist/playlist.service";
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-list-song',
  templateUrl: './list-song.component.html',
  styleUrls: ['./list-song.component.css']
})
export class ListSongComponent implements OnInit {


  // audioList: SongTemp[] = [];
  songs: Song[] = [];
  playlist: Playlist[] = [];
  songType: SongType[] = [];
  songForm!: FormGroup;

  constructor(private songService: SongService,
  private  playlistService : PlaylistService) {
  }

  ngOnInit() {
    this.songService.getAll().subscribe(songs => {
      this.songs = songs;
    });

    this.playlistService.getAll().subscribe(playlist => {
      this.playlist = playlist;
      // @ts-ignore
      // for (let i = 0; i < playlist.length; i++) {
      //   let temp : SongTemp={title: playlist[i].name}
      //   // @ts-ignore
      //   this.playlist.push(temp);
      // }
    });


  }

  getAll() {
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
  addSongToPlaylist(id: any) {
    if (confirm('Bạn có muốn thêm vào playlist?')) {
      this.playlistService.addSongToPlaylist(id);
      alert("Ok");
      this.getAll()
    }
  }
}


