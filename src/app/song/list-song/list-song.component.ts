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
  audioList = [
    {
      url: "https://firebasestorage.googleapis.com/v0/b/htv3-8f33d.appspot.com/o/file_mp3%2Fy2mate.com%20-%20Kh%C3%A1%20b%E1%BA%A3nh%20vihouse%20nonstop%20999%20%C4%91%C3%B3a%20h%E1%BB%93ng%20.mp3?alt=media&token=cbd68f37-35ee-4868-8d5f-f0376249c9c0",
      title: "999 đóa hồng",
      cover: "https://media.ngoisao.vn/news/2019/07/17/120190717150344-ngoisao.vn-w540-h960.jpg"
    }
  ];

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
      // @ts-ignore
      for (let i = 0; i < songs.length; i++) {
        let temp : SongTemp={url:songs[i].fileMp3, title: songs[i].name, cover:songs[i].avatar }
        // @ts-ignore
        this.audioList.push(temp);
      }
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
    console.log("play list:", this.playlist)

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


