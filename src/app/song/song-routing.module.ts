import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListSongComponent} from "./list-song/list-song.component";
import {SearchComponent} from "./search/search.component";
import {EditSongComponent} from "./edit-song/edit-song.component";
import {CreateSongComponent} from "./create-song/create-song.component";
import {PlaySongComponent} from "../home/play-song/play-song.component";

const routes: Routes = [
  {
    path: '',
    component:ListSongComponent
  },
  {
    path: 'create',
    component: CreateSongComponent
  },
  {
    path: "edit/:id",
    component: EditSongComponent
  },
  {
    path: 'search',
    component:SearchComponent },

 {
    path: 'search/song/:id',
    component:PlaySongComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongRoutingModule { }
