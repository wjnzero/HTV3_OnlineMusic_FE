import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./home/layout/layout.component";
import {LoginComponent} from "./core/login/login.component";
import {RegisterComponent} from "./core/register/register.component";
import {EditSongComponent} from "./song/edit-song/edit-song.component";


const routes: Routes = [
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(module => module.AccountModule)
  },
  {
    path: 'song',
    loadChildren: () => import('./song/song.module').then(module => module.SongModule)
  },
  {
    path: "edit-song/:id",
    component: EditSongComponent
  },
  {
    path: '', component: LayoutComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
