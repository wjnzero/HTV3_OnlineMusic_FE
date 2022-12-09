// import { Component } from '@angular/core';
// import {FormBuilder, FormGroup} from "@angular/forms";
// import {User} from "../../model/user";
// import {Role} from "../../model/role";
// import {Observable} from "rxjs";
// import {UserService} from "../../service/user/user.service";
// import {ActivatedRoute, Router} from "@angular/router";
// import {HttpService} from "../../service/htth-service.service";
//
// @Component({
//   selector: 'app-user-profile',
//   templateUrl: './user-profile.component.html',
//   styleUrls: ['./user-profile.component.css']
// })
// export class UserProfileComponent {
//
//   userForm?: FormGroup;
//   user?: User;
//   id?: string;
//   avatarURL?: string;
//   selectImg: any = null;
//   roles?: Role[];
//
//   downloadImgURL?: Observable<string>;
//
//   constructor(private formBuilder: FormBuilder,
//               private userService: UserService,
//               private route: Router,
//               private router: ActivatedRoute,
//               private httpService: HttpService,
//               private storage: AngularFireStorage) {
//   }
//
//   ngOnInit(): void {
//     this.userForm = this.formBuilder.group(
//       {
//         name: ['', [Validators.required]],
//         email: ['', [Validators.required, Validators.email]],
//         address: [''],
//         phone: [''],
//         avatarURL: ['', [Validators.required]]
//       });
//     this.id = this.httpService.getID();
//     this.userService.getUserById(this.id).subscribe(userGet => {
//       this.user = userGet;
//       this.avatarURL = userGet.avatarURL;
//       this.userForm.patchValue(this.user);
//     });
//     console.log(this.user.email);
//   }
//
//   // tslint:disable-next-line:typedef
//   onSubmit() {
//     const user1 = {
//       id: this.user.id,
//       name: this.userForm.value.name,
//       email: this.userForm.value.email,
//       username: this.user.username,
//       password:  this.user.password,
//       address: this.userForm.value.address,
//       phone: this.userForm.value.phone,
//       avatarURL: this.avatarURL,
//       role: this.user.role
//     };
//     this.userService.updateUser(user1.id, user1).subscribe(res => {
//       Swal.fire({
//         icon: 'success',
//         title: 'Cập nhật thành công',
//         showConfirmButton: true,
//         timer: 3000
//       });
//     });
//   }
//
//   // tslint:disable-next-line:typedef
//   sendToFirebase(){
//     var n = Date.now();
//     // @ts-ignore
//     const file = event.target.files[0];
//     const filePath = `RoomsImages/${n}`;
//     const fileRef = this.storage.ref(filePath);
//     const task = this.storage.upload(`RoomsImages/${n}`, file);
//     task.snapshotChanges().pipe(
//       finalize(() =>{
//         this.downloadImgURL = fileRef.getDownloadURL();
//         this.downloadImgURL.subscribe(url => {
//           if (url){
//             this.avatarURL = url;
//           }
//           console.log(this.avatarURL);
//           console.log(this.user)
//         })
//       })
//     )
//       .subscribe(url =>{
//         if (url){
//           console.log(url);
//         }
//       })
//   }
//
//   // tslint:disable-next-line:typedef
//   showPre(event: any){
//     if (event.target.files && event.target.files[0]){
//       this.selectImg = event.target.files[0];
//       this.sendToFirebase();
//     } else {
//       this.avatarURL = this.user.avatarURL;
//       this.selectImg = null;
//     }
//   }
//
// }
