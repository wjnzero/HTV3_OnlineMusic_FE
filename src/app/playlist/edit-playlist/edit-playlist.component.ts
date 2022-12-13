import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {PlaylistService} from "../../service/playlist/playlist.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {ActivatedRoute, ParamMap} from "@angular/router";

declare var Swal: any;
@Component({
  selector: 'app-edit-playlist',
  templateUrl: './edit-playlist.component.html',
  styleUrls: ['./edit-playlist.component.css']
})
export class EditPlaylistComponent {

  // @ts-ignore
  id: number;
  playlistForm!: FormGroup;


  constructor(private playlistService: PlaylistService, private storage: AngularFireStorage, private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
      // @ts-ignore
      this.id = +paraMap.get('id');
      this.getPlaylist(this.id);
    })
  }

  ngOnInit(): void {
  }

  getPlaylist(id: number) {
    return this.playlistService.getById(id).subscribe(playlist => {
      this.playlistForm = new FormGroup({
        id: new FormControl(playlist.id),
        name: new FormControl(playlist.name),
      })
    })
  }

  update() {

    const editPlaylist = this.playlistForm.value
    console.log(editPlaylist)
    this.playlistService.update(editPlaylist.id, editPlaylist).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Edit thành công',
        showConfirmButton: false,
        timer: 1000
      });
    })
  }
}
