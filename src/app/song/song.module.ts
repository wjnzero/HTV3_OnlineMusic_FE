import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongRoutingModule } from './song-routing.module';
import {ListSongComponent} from "./list-song/list-song.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SearchComponent} from "./search/search.component";
import {CreateSongComponent} from "./create-song/create-song.component";
import {EditSongComponent} from "./edit-song/edit-song.component";


@NgModule({
  declarations: [
    ListSongComponent,
    SearchComponent,
    EditSongComponent,
    CreateSongComponent
     ],
  exports: [
    ListSongComponent,
    SearchComponent,
    CreateSongComponent
  ],
  imports: [
    CommonModule,
    SongRoutingModule,
    ReactiveFormsModule
  ]
})
export class SongModule { }
