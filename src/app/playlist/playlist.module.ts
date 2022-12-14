import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngMusicPlayerModule} from "ang-music-player";
import {PlaylistRoutingModule} from "./playlist-routing.module";
import {CreatePlaylistComponent} from "./create-playlist/create-playlist.component";
import {EditPlaylistComponent} from "./edit-playlist/edit-playlist.component";
import {PlaylistComponent} from "./playlist/playlist.component";
import { SearchPlaylistComponent } from './search-playlist/search-playlist.component';


@NgModule({
  declarations: [
    PlaylistComponent,
    CreatePlaylistComponent,
    EditPlaylistComponent,
    SearchPlaylistComponent,
  ],
  exports: [
    PlaylistComponent,
    CreatePlaylistComponent,
    SearchPlaylistComponent
  ],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    ReactiveFormsModule,
    AngMusicPlayerModule,
    FormsModule
  ]
})
export class PlaylistModule {
}
