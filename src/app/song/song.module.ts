import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SongRoutingModule} from './song-routing.module';
import {ListSongComponent} from "./list-song/list-song.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchComponent} from "./search/search.component";
import {CreateSongComponent} from "./create-song/create-song.component";
import {AngMusicPlayerModule} from "ang-music-player";
import {EditSongComponent} from "./edit-song/edit-song.component";
import { ListNewSongComponent } from './list-new-song/list-new-song.component';


@NgModule({
  declarations: [
    ListSongComponent,
    SearchComponent,
    CreateSongComponent,
    EditSongComponent,
    ListNewSongComponent
  ],
  exports: [
    ListSongComponent,
    SearchComponent,
    CreateSongComponent
  ],
  imports: [
    CommonModule,
    SongRoutingModule,
    ReactiveFormsModule,
    AngMusicPlayerModule,
    FormsModule
  ]
})
export class SongModule {
}
