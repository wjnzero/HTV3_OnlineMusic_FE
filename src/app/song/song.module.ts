import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongRoutingModule } from './song-routing.module';
import {ListSongComponent} from "./list-song/list-song.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CreateSongComponent} from "./create-song/create-song.component";


@NgModule({
  declarations: [
    ListSongComponent,
    CreateSongComponent
  ],
  exports: [
    ListSongComponent,
    CreateSongComponent
  ],
  imports: [
    CommonModule,
    SongRoutingModule,
    ReactiveFormsModule
  ]
})
export class SongModule { }
