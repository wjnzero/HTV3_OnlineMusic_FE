import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongRoutingModule } from './song-routing.module';
import {ListSongComponent} from "./list-song/list-song.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SearchComponent} from "./search/search.component";


@NgModule({
  declarations: [
    ListSongComponent,
    SearchComponent
     ],
  exports: [
    ListSongComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    SongRoutingModule,
    ReactiveFormsModule
  ]
})
export class SongModule { }
