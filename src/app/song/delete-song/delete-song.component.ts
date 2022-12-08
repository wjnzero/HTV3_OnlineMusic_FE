import {Component, OnInit} from '@angular/core';
import {SongService} from "../../service/song.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-delete-song',
  templateUrl: './delete-song.component.html',
  styleUrls: ['./delete-song.component.css']
})
export class DeleteSongComponent implements OnInit{
  id: any;
  songs: any;


  constructor(private songService: SongService,
              private router: Router,
              private activateRoute: ActivatedRoute,) {
    this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.findById(this.id);
    });
  }

  ngOnInit(): void {
  }
  deletePost(id: any) {
    this.songService.delete(id).subscribe(() => {
      this.router.navigate(['/']);
      alert("Xoá thành công")
    })
  }
  findById(id: any) {
    this.songService.getById(id).subscribe((data: { name: any; describeSong: any; avatar: any; author:any;
      singer:any;album:any;view:any }) => {
      console.log(data)
      this.songs = new FormGroup({
        name: new FormControl(data.name),
        describeSong: new FormControl(data.describeSong),
        avatar: new FormControl(data.avatar),
        author: new FormControl(data.author),
        singer: new FormControl(data.singer),
        album: new FormControl(data.album),
        view: new FormControl(data.view),
      });
    });
  }
}
