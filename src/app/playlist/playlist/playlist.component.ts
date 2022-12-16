import {Component, OnInit} from '@angular/core';
import {PlaylistService} from "../../service/playlist/playlist.service";




@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  userid?: any;
  audioList = [
    {
      url: "https://firebasestorage.googleapis.com/v0/b/htv3-8f33d.appspot.com/o/file_mp3%2Fy2mate.com%20-%20Kh%C3%A1%20b%E1%BA%A3nh%20vihouse%20nonstop%20999%20%C4%91%C3%B3a%20h%E1%BB%93ng%20.mp3?alt=media&token=cbd68f37-35ee-4868-8d5f-f0376249c9c0",
      title: "999 đóa hồng",
      cover: "https://media.ngoisao.vn/news/2019/07/17/120190717150344-ngoisao.vn-w540-h960.jpg"
    }
  ];

  // audioList: PlaylistTemp[] = [];
  playlist: any;
  songs: any;

  constructor(private playlistService: PlaylistService) {
  }

  ngOnInit() {
    this.userid = window.localStorage.getItem("idUser");
    this.getByUserId();
    console.log(this.audioList);
    console.log("playlist123"+this.playlist);


    this.playlistService.getByUserId(this.userid).subscribe(playlist => {
      this.playlist = playlist;
    });
  }

  showSongInPlaylist(playListId:any){
    this.playlistService.showSongInPlaylist(playListId).subscribe(songs => {
      console.log("pll uid: ", songs)
      this.songs = songs;
    });
  }


  getByUserId() {
    this.playlistService.getByUserId(this.userid).subscribe(playlist => {
      console.log("pll uid: "+ playlist[0].id)
      this.playlist = playlist;
    });
  }

  delete(id: any) {
    if (confirm('Bạn có muốn xóa?')) {
      this.playlistService.delete(id).subscribe(data => {
        console.log(data)
        alert("Ok");
        this.getByUserId()
      }, e => {
        console.error(e)
      });
    }
  }

}



