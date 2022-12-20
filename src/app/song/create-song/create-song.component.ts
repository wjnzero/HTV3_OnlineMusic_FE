// import {Component, OnInit} from '@angular/core';
// import {SongService} from "../../service/song/song.service";
// import {FormControl, FormGroup} from "@angular/forms";
// import {UserService} from "../../service/user/user.service";
// import {setUserId} from "@angular/fire/analytics";
// import {HttpService} from "../../service/http-service.service";
// import {TokenStorageService} from "../../security/service/token-storage.service";
// import {finalize} from "rxjs/operators";
// import {AngularFireStorage} from "@angular/fire/compat/storage";
// import {Observable} from "rxjs";
// import {Song} from "../../model/song";
// import {Router} from "@angular/router";
// import * as moment from "moment/moment";
//
// declare var Swal: any;
//
// function sleep(number: number) {
//   return new Promise(resolve => setTimeout(resolve, number));
//
// }
//
// @Component({
//   selector: 'app-create-song',
//   templateUrl: './create-song.component.html',
//   styleUrls: ['./create-song.component.css']
// })
// export class CreateSongComponent implements OnInit {
//   downloadImgURL ?: Observable<string>;
//   downloadMp3URL ?: Observable<string>;
//   fileMp3?: string;
//   avatar?: string;
//
//   // song: Song = {};
//   constructor(private songService: SongService,
//               private userService: UserService,
//               private httpService: HttpService,
//               private tokenService: TokenStorageService,
//               private storage: AngularFireStorage,
//               private router: Router
//   ) {
//   }
//
//   ngOnInit(): void {
//   }
//
//   songForm: FormGroup = new FormGroup({
//     name: new FormControl(),
//     describeSong: new FormControl(),
//     fileMp3: new FormControl(),
//     avatar: new FormControl(),
//     viewSong:new FormControl(),
//     timeCreate:new FormControl(),
//     lastTimeEdit:new FormControl()
//   })
//
//   saveSong() {
//     const now = new Date();
//     const dateConvert = moment(now).format('yyyy-MM-DD');
//     const view = 0;
//     const song = {
//       name: this.songForm.value.name,
//       describeSong: this.songForm.value.describeSong,
//       fileMp3: this.fileMp3,
//       avatar: this.avatar,
//       viewSong: view,
//       timeCreate: this.songForm.value.timeCreate,
//       lastTimeEdit: this.songForm.value.lastTimeEdit,
//       dateCreateSong: dateConvert
//     };
//     const idUser = this.tokenService.getUser().id;
//     this.songService.save(song, idUser).subscribe(() => {
//     });
//     Swal.fire({
//       icon: 'success',
//       title: 'Thêm thành công',
//       showConfirmButton: false,
//       timer: 1000
//     });
//     this.songForm.reset();
//   }
//
//   sendToFirebaseImg() {
//     var n = Date.now();
//     // @ts-ignore
//     const file = event.target.files[0];
//     const filePath = `file_img/${n}`;
//     const fileRef = this.storage.ref(filePath);
//     const task = this.storage.upload(`file_img/${n}`, file);
//     task.snapshotChanges().pipe(
//       finalize(() => {
//         this.downloadImgURL = fileRef.getDownloadURL();
//         this.downloadImgURL.subscribe(url => {
//           if (url) {
//             // this.songForm.patchValue({avatar: url});
//             this.avatar = url;
//           }
//         })
//         Swal.fire({
//           icon: 'success',
//           title: 'Upload thành công',
//           showConfirmButton: false,
//           timer: 1000
//         });
//       })
//     )
//       .subscribe(url => {
//         if (url) {
//           console.log(url);
//         }
//       })
//
//   }
//
//   sendToFirebaseMp3() {
//     var n = Date.now();
//     // @ts-ignore
//     const file = event.target.files[0];
//     const filePath = `file_mp3/${n}`;
//     const fileRef = this.storage.ref(filePath);
//     const task = this.storage.upload(`file_mp3/${n}`, file);
//     // sleep(3000);
//     // alert('upload thành công')
//     task.snapshotChanges().pipe(
//       finalize(() => {
//         this.downloadMp3URL = fileRef.getDownloadURL();
//         this.downloadMp3URL.subscribe(url => {
//           if (url) {
//             // this.songForm.patchValue({fileMp3: url});
//             this.fileMp3 = url;
//           }
//         })
//         Swal.fire({
//           icon: 'success',
//           title: 'Upload thành công',
//           showConfirmButton: false,
//           timer: 3000
//         });
//       })
//     )
//       .subscribe(url => {
//         if (url) {
//           console.log(url);
//         }
//       })
//
//   }
//
// }
