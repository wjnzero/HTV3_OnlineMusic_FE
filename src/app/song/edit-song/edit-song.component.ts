
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {SongService} from "../../service/song/song.service";

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.css']
})
export class EditSongComponent implements OnInit {

  // @ts-ignore
  id: number;


  songForm!: FormGroup;

  constructor(private songService: SongService, private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
      // @ts-ignore
      this.id = +paraMap.get('id');
      this.getSong(this.id);
    })
  }

  ngOnInit(): void {
  }

  getSong(id: number) {
    return this.songService.getById(id).subscribe(song => {
      this.songForm = new FormGroup({
        id: new FormControl(song.id),
        name: new FormControl(song.name),
        describeSong: new FormControl(song.describeSong),
        avatar: new FormControl(song.avatar),
         fileMp3: new FormControl(song.fileMp3),
        // songTypeSet: new FormControl(song.songTypeSet)
      })
    })
  }

  update() {

    const editSong = this.songForm.value
    console.log(editSong)
    this.songService.update(editSong.id, editSong).subscribe(() => {
      alert("Cập nhập thành công");
    })
  }
}
