import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongRoutingModule } from './song-routing.module';
import {ListSongComponent} from "./list-song/list-song.component";
import {ReactiveFormsModule} from "@angular/forms";
import { PlayerComponent } from './player/player.component';


@NgModule({
  declarations: [
    ListSongComponent,
    PlayerComponent
  ],
  exports: [
    ListSongComponent
  ],
  imports: [
    CommonModule,
    SongRoutingModule,
    ReactiveFormsModule
  ]
})
export class SongModule { }
