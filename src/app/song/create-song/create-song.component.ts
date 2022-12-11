import {Component, OnInit} from '@angular/core';
import {SongService} from "../../service/song/song.service";
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../service/user/user.service";
import {setUserId} from "@angular/fire/analytics";
import {HttpService} from "../../service/http-service.service";
import {TokenStorageService} from "../../security/service/token-storage.service";
import {finalize} from "rxjs/operators";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {Observable} from "rxjs";
import {Song} from "../../model/song";

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent implements OnInit {
  downloadImgURL ?: Observable<string>;
  downloadMp3URL ?: Observable<string>;

  // song: Song = {};


  constructor(private songService: SongService,
              private userService: UserService,
              private httpService: HttpService,
              private tokenService: TokenStorageService,
              private storage: AngularFireStorage
  ) {
  }

  ngOnInit()
    :
    void {
  }

  songForm: FormGroup = new FormGroup({
    name: new FormControl(),
    describeSong: new FormControl(),
    fileMp3: new FormControl(),
    avatar: new FormControl()
  })
  async saveSong() {
    const song = this.songForm.value;
    const idUser = await this.tokenService.getUser().id;
    console.log("ssss" + idUser)
    this.songService.save(song, idUser).subscribe(() => {
      alert("Thêm mới thành công")
    });
    this.songForm.reset();
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
      })
    )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      })
  }
}
