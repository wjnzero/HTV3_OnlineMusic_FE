import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngMusicPlayerModule} from "ang-music-player";
import {PlaylistRoutingModule} from "./playlist-routing.module";
import {CreatePlaylistComponent} from "./create-playlist/create-playlist.component";
import {EditPlaylistComponent} from "./edit-playlist/edit-playlist.component";
import {PlaylistComponent} from "./playlist/playlist.component";
import { ListsongInOnePlaylistComponent } from './listsong-in-one-playlist/listsong-in-one-playlist.component';
import {NgxPaginationModule} from "ngx-pagination";
import {AppModule} from "../app.module";

@NgModule({
  declarations: [
    PlaylistComponent,
    CreatePlaylistComponent,
    EditPlaylistComponent,
    ListsongInOnePlaylistComponent
  ],
  exports: [
    PlaylistComponent,
    CreatePlaylistComponent,
    ListsongInOnePlaylistComponent,

  ],

  imports: [
    CommonModule,
    PlaylistRoutingModule,
    ReactiveFormsModule,
    AngMusicPlayerModule,
    FormsModule,
    NgxPaginationModule,
    AppModule,
  ]
})
export class PlaylistModule {
}
