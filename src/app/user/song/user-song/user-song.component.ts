import {Component, OnInit} from '@angular/core';
import {Song} from "../../../model/song";
import {SongService} from "../../../service/song/song.service";
import {UserService} from "../../../service/user/user.service";
import {HttpService} from "../../../service/http-service.service";
import {User} from "../../../model/user";
import {TokenStorageService} from "../../../security/service/token-storage.service";
import {Playlist} from "../../../model/playlist";
import {SongType} from "../../../model/songType";
import {FormGroup} from "@angular/forms";
import {SongTemp} from "../../../model/songTemp";
import {PlaylistService} from "../../../service/playlist/playlist.service";
declare var Swal: any;
@Component({
  selector: 'app-user-song',
  templateUrl: './user-song.component.html',
  styleUrls: ['./user-song.component.css']
})
export class UserSongComponent implements OnInit {
  // @ts-ignore
  user: User;
  userid: any;
  songList: Song[] = [];
  songs: Song[] = [];
  playlist: Playlist[] = [];
  songType: SongType[] = [];
  songForm!: FormGroup;

  constructor(private songService: SongService,
              private playlistService: PlaylistService,
              private userService: UserService,
              private tokenService: TokenStorageService,
              private httpService: HttpService) {
  }

  ngOnInit(): void {
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
    // this.userid = window.localStorage.getItem("idUser");

    this.playlistService.getAll().subscribe(playlist => {
      this.playlist = playlist;

    });
    this.playlistService.getByUserId(this.userid).subscribe(playlist => {
      this.playlist = playlist;
    });
  }

  delete(id: any) {
    if (confirm('Bạn có muốn xóa?')) {
      this.songService.delete(id).subscribe(data => {
        console.log(data)
        alert("Ok");
        this.ngOnInit();
      }, e => {
        console.error(e)
      });
    }
  }

  addSongToPlaylist(playlistId: any, songId: any) {
    this.playlistService.addSongToPlaylist(playlistId, songId).subscribe(() => {
    });
    Swal.fire({
      icon: 'success',
      title: 'thành công',
      showConfirmButton: false,
      timer: 1000
    });
  }
}



