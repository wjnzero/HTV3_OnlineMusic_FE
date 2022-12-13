import {Component, OnInit} from '@angular/core';
import {Playlist} from "../../model/playlist";
import {PlaylistService} from "../../service/playlist/playlist.service";


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  audioList = [
    {
      url: "https://firebasestorage.googleapis.com/v0/b/htv3-8f33d.appspot.com/o/file_mp3%2Fy2mate.com%20-%20Kh%C3%A1%20b%E1%BA%A3nh%20vihouse%20nonstop%20999%20%C4%91%C3%B3a%20h%E1%BB%93ng%20.mp3?alt=media&token=cbd68f37-35ee-4868-8d5f-f0376249c9c0",
      title: "999 đóa hồng",
      cover: "https://media.ngoisao.vn/news/2019/07/17/120190717150344-ngoisao.vn-w540-h960.jpg"
    }
  ];

  // audioList: PlaylistTemp[] = [];
  playlist: Playlist[] = [];

  constructor(private playlistService: PlaylistService) {
  }

  ngOnInit() {
    this.getAll();
    console.log(this.audioList);
  }

  getAll() {
    this.playlistService.getAll().subscribe(playlist => {
      this.playlist = playlist;
    });
  }

  delete(id: any) {
    if (confirm('Bạn có muốn xóa?')) {
      this.playlistService.delete(id).subscribe(data => {
        console.log(data)
        alert("Ok");
        this.getAll()
      }, e => {
        console.error(e)
      });
    }
  }
}




// audioList = [
//   {
//     url: "https://firebasestorage.googleapis.com/v0/b/htv3-8f33d.appspot.com/o/file_mp3%2Fy2mate.com%20-%20Kh%C3%A1%20b%E1%BA%A3nh%20vihouse%20nonstop%20999%20%C4%91%C3%B3a%20h%E1%BB%93ng%20.mp3?alt=media&token=cbd68f37-35ee-4868-8d5f-f0376249c9c0",
//     title: "999 đóa hồng",
//     cover: "https://media.ngoisao.vn/news/2019/07/17/120190717150344-ngoisao.vn-w540-h960.jpg"
//   }
// ];
//
// // @ts-ignore
// id: number;
//
// playlist: Playlist[] = [];
//
// // @ts-ignore
// playlistForm: FormGroup;
//
// constructor(private playlistService: PlaylistService, private activateRoute: ActivatedRoute) {
//   this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
//     // @ts-ignore
//     this.id = +paraMap.get('id');
//     this.getPlaylist(this.id);
//   })
// }
// ngOnInit(): void {
//   this.getAll();
// }
// getAll() {
//   this.playlistService.getAllPlaylists().subscribe(playlist => {
//     this.playlist = playlist;
//     for (let i = 0; i < playlist.length; i++) {
//       let temp : PlaylistTemp={url:playlist[i].fileMp3, title: playlist[i].name, cover:playlist[i].avatar }
//       // @ts-ignore
//       this.audioList.push(temp);
//     }
//   });
// }
// getPlaylist(id: number) {
//   return this.playlistService.findById(id).subscribe(playlist => {
//     this.playlistForm = new FormGroup({
//       id: new FormControl(playlist.id),
//     })
//   })
// }
// delete(id: any) {
//   if (confirm('Bạn có muốn xóa?')) {
//     this.playlistService.deletePlaylist(id).subscribe(() => {
