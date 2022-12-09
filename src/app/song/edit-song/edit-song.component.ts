
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

  // @ts-ignore
  songForm: FormGroup;

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
        title: new FormControl(song.title),
        price: new FormControl(song.price),
        description: new FormControl(song.description)
      })
    })
  }

  update() {
    const editSong = this.songForm.value
    this.songService.update(editSong.id, editSong).subscribe(() => {
      alert("Cập nhập thành công");
    })
  }
}
