import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListSongComponent} from "./list-song/list-song.component";
import {SearchComponent} from "./search/search.component";
import {EditSongComponent} from "./edit-song/edit-song.component";
import {CreateSongComponent} from "./create-song/create-song.component";

const routes: Routes = [
  {
    path: '',
    component:ListSongComponent
  },
  {
    path: 'create/:id',
    component: CreateSongComponent
  },
  {
    path: "edit/:id",
    component: EditSongComponent
  },
  {
    path: 'search',
    component:SearchComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongRoutingModule { }
