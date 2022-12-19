import {Component, OnInit} from '@angular/core';
import {Song} from "../../model/song";
import {SongService} from "../../service/song/song.service";
import {SongType} from "../../model/songType";
import {SongTemp} from "../../model/songTemp";
import {Playlist} from "../../model/playlist";
import {PlaylistService} from "../../service/playlist/playlist.service";
import {FormGroup} from "@angular/forms";
import {allowMangle} from "@angular-devkit/build-angular/src/utils/environment-options";


declare var Swal: any;
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
  userid?: any;

  constructor(private songService: SongService,
  private  playlistService : PlaylistService) {
  }

  ngOnInit() {
    this.songService.getAll().subscribe(songs => {
      this.songs = songs;
    });
    this.userid = window.localStorage.getItem("idUser");

    this.playlistService.getAll().subscribe(playlist => {
      this.playlist = playlist;

    });
    this.playlistService.getByUserId(this.userid).subscribe(playlist => {
      this.playlist = playlist;
    });
}
  getAll() {
  }

  getByUserId() {
    this.playlistService.getByUserId(this.userid).subscribe(playlist => {
      console.log("pll uid: "+ playlist[0].id)
      this.playlist = playlist;
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
  addSongToPlaylist(playlistId: any, songId: any) {
    // if (confirm('Bạn có muốn thêm vào playlist?')) {
      this.playlistService.addSongToPlaylist(playlistId, songId).subscribe(()=>{
        // alert("ok")
      });
      Swal.fire({
        icon: 'success',
        title: 'Thêm thành công',
        showConfirmButton: false,
        timer: 1000
      });
    }
  }
// }


