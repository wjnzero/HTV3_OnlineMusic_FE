import { Component } from '@angular/core';
import {PlaylistService} from "../../service/playlist/playlist.service";
import {UserService} from "../../service/user/user.service";
import {HttpService} from "../../service/http-service.service";
import {TokenStorageService} from "../../security/service/token-storage.service";
import {FormControl, FormGroup} from "@angular/forms";



@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent {

  constructor(private playlistService: PlaylistService,
              private userService: UserService,
              private httpService: HttpService,
              private tokenService: TokenStorageService,

  ) {
  }
  ngOnInit():void {
  }
  playlistForm: FormGroup = new FormGroup({
    name: new FormControl(),
    timeCreate:new FormControl(),
    lastTimeEdit:new FormControl()
  })

  savePlaylist() {

    const playlist = {
      name: this.playlistForm.value.name,
      timeCreate: this.playlistForm.value.timeCreate,
      lastTimeEdit: this.playlistForm.value.lastTimeEdit
    };
    const idUser = this.tokenService.getUser().id;
    this.playlistService.save(playlist, idUser).subscribe(() => {
    });
    this.playlistForm.reset();
    window.location.reload()
  }



}
