import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {
  ngOnInit(): void {
  }

  songForm: FormGroup = new FormGroup({
      name: new FormControl(),
      describeSong: new FormControl(),
      fileMp3: new FormControl(),
      avatar: new FormControl(),
      author: new FormControl(),
      singer: new FormControl(),
      nameCreate: new FormControl(),
      songTypeSet: new FormControl(),
      album: new FormControl(),
      view: new FormControl()
    }
  )
  saveSong(){
    const song = this.songForm.value;

  }
}
