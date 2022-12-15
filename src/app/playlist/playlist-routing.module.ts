
import {RouterModule, Routes} from "@angular/router";
import {CreatePlaylistComponent} from "./create-playlist/create-playlist.component";
import {EditPlaylistComponent} from "./edit-playlist/edit-playlist.component";
import {NgModule} from "@angular/core";
import {PlaylistComponent} from "./playlist/playlist.component";



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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule { }
