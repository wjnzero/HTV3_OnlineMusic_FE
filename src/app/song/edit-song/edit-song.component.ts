
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {SongService} from "../../service/song/song.service";
import {finalize} from "rxjs/operators";
import {Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
declare var Swal: any;

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.css']
})
export class EditSongComponent implements OnInit {

  // @ts-ignore
  id: number;

  // avatar?: string;
  // fileMp3?:string;
  songForm!: FormGroup;
  downloadImgURL ?: Observable<string>;
  downloadMp3URL ?: Observable<string>;

  constructor(private songService: SongService, private storage: AngularFireStorage, private activateRoute: ActivatedRoute) {
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
  sendToFirebaseImg() {
    var n = Date.now();
    // @ts-ignore
    const file = event.target.files[0];
    const filePath = `file_img/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`file_img/${n}`, file);
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadImgURL = fileRef.getDownloadURL();
        this.downloadImgURL.subscribe(url => {
          if (url) {
            this.songForm.patchValue({avatar:url});
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Upload thành công',
          showConfirmButton: false,
          timer: 3000
        });
      })
    )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      })
  }

  sendToFirebaseMp3() {
    var n = Date.now();
    // @ts-ignore
    const file = event.target.files[0];
    const filePath = `file_mp3/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`file_mp3/${n}`, file);
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadMp3URL = fileRef.getDownloadURL();
        this.downloadMp3URL.subscribe(url => {
          if (url) {
            this.songForm.patchValue({fileMp3:url});
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Upload thành công',
          showConfirmButton: false,
          timer: 3000
        });
      })
    )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      })
  }

  update() {

    const editSong = this.songForm.value
    console.log(editSong)
    this.songService.update(editSong.id, editSong).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Cập nhât thành công',
        showConfirmButton: false,
        timer: 1000
      });
    })
  }
}
