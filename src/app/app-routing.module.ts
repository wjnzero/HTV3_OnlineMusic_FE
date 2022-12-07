import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListSongComponent} from "./song/list-song/list-song.component";
import {AddSongComponent} from "./song/add-song/add-song.component";

const routes: Routes = [
  {path:"",component:ListSongComponent},
  // {path:"search-song/:id",component:SearchSongsComponent},
  {path:"add-song",component:AddSongComponent},
  // {path:"delete-song/:id",component:DeleteSongsComponent},
  // {path:"update-song/:id",component:EditSongComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
