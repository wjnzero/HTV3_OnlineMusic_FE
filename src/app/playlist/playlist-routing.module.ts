import {RouterModule, Routes} from "@angular/router";
import {CreatePlaylistComponent} from "./create-playlist/create-playlist.component";
import {EditPlaylistComponent} from "./edit-playlist/edit-playlist.component";
import {NgModule} from "@angular/core";
import {PlaylistComponent} from "./playlist/playlist.component";
import {ListsongInOnePlaylistComponent} from "./listsong-in-one-playlist/listsong-in-one-playlist.component";


const routes: Routes = [
  {
    path: '',
    component:PlaylistComponent
  },
  {
    path: 'create/:id',
    component: CreatePlaylistComponent
  },
  {
    path: "edit1/:id",
    component: EditPlaylistComponent
  },
  {
    path: "findsonginplaylist/:id",
    component: ListsongInOnePlaylistComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule { }
