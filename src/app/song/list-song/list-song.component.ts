import {Component, OnInit} from '@angular/core';
import {Song} from "../../model/song";
import {SongService} from "../../service/song/song.service";
import {SongType} from "../../model/songType";
import {SongTemp} from "../../model/songTemp";
import {Playlist} from "../../model/playlist";
import {PlaylistService} from "../../service/playlist/playlist.service";
import {FormGroup} from "@angular/forms";
import {allowMangle} from "@angular-devkit/build-angular/src/utils/environment-options";
import {UserService} from "../../service/user/user.service";
import {TokenStorageService} from "../../security/service/token-storage.service";
import {ActivatedRoute} from "@angular/router";


declare var Swal: any;

@Component({
  selector: 'app-list-song',
  templateUrl: './list-song.component.html',
  styleUrls: ['./list-song.component.css']
})
export class ListSongComponent implements OnInit {


  // audioList: SongTemp[] = [];
  songs: Song[] = [];
  playListUser: Playlist[] = [];
  songType: SongType[] = [];
  songForm!: FormGroup;
  userid?: any;
  p?: number;
  constructor(private songService: SongService,
              private userService: UserService,
              private tokenService: TokenStorageService,
              private activateRoute: ActivatedRoute,
              private playlistService: PlaylistService) {
  }

  ngOnInit() {
    const idUser = this.tokenService.getUser().id;
    this.songService.getSongByUser(idUser).subscribe(songs => {
      this.songs = songs;
      // @ts-ignore
      for (let i = 0; i < songs.length; i++) {
        let temp: SongTemp = {url: songs[i].fileMp3, title: songs[i].name, cover: songs[i].avatar}
        // @ts-ignore
        this.audioList.push(temp);
      }
    });
    this.userid = window.localStorage.getItem("idUser");
    this.playlistService.getAll().subscribe(playlist => {
      this.playListUser = playlist;
    });

    this.playlistService.getByUserId(this.userid).subscribe(playlist => {
      this.playListUser = playlist;
    });
  }

  getAll() {
  }

  getByUserId() {
    this.playlistService.getByUserId(this.userid).subscribe(playlist => {
      console.log("pll uid: " + playlist[0].id)
      this.playListUser = playlist;
    });
  }

  delete(id: any) {
    this.songService.delete(id).subscribe(data => {
      console.log(data)
      this.getAll()
    }, e => {
      console.error(e)
    });
  }

  addSongToPlaylist(playlistId: any, songId: any) {
    // if (confirm('Bạn có muốn thêm vào playlist?')) {
    this.playlistService.addSongToPlaylist(playlistId, songId).subscribe(() => {
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


