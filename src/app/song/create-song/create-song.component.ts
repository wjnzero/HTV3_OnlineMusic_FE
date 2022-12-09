import {Component, OnInit} from '@angular/core';
import {SongService} from "../../service/song/song.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent implements OnInit{

  constructor(private songService:SongService) {
  }

  ngOnInit(): void {
  }

  songForm: FormGroup = new FormGroup({
    name : new FormControl(),
    describeSong : new FormControl(),
    fileMp3 : new FormControl(),
    avatar : new FormControl(),
    author : new FormControl(),
    singer : new FormControl(),
    songTypeSet : new FormControl(),
    playListSet : new FormControl(),
    album : new FormControl(),
    view : new FormControl()
  })

  saveSong(){
    const song = this.songForm.value;
    this.songService.save(song).subscribe(()=>{
      alert("Thêm mới thành công")
    });
    this.songForm.reset();
  }

}
