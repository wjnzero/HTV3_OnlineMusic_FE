import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SongRoutingModule} from './song-routing.module';
import {ListSongComponent} from "./list-song/list-song.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchComponent} from "./search/search.component";
import {CreateSongComponent} from "./create-song/create-song.component";
import {AngMusicPlayerModule} from "ang-music-player";
import {EditSongComponent} from "./edit-song/edit-song.component";
import {ListNewSongComponent} from './list-new-song/list-new-song.component';
import {PlaySongComponent} from '../home/play-song/play-song.component';
import {NgxPaginationModule} from "ngx-pagination";
import { ListOrderViewSongComponent } from './list-order-view-song/list-order-view-song.component';

@NgModule({
  declarations: [
    ListSongComponent,
    SearchComponent,
    CreateSongComponent,
    EditSongComponent,
    ListNewSongComponent,
    ListOrderViewSongComponent],
    exports: [
        ListSongComponent,
        SearchComponent,
        CreateSongComponent,
        ListNewSongComponent,
        ListOrderViewSongComponent
    ],
  imports: [
    CommonModule,
    SongRoutingModule,
    ReactiveFormsModule,
    AngMusicPlayerModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class SongModule {
}
