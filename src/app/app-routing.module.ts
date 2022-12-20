import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./home/layout/layout.component";
import {LoginComponent} from "./core/login/login.component";
import {RegisterComponent} from "./core/register/register.component";
import {UserProfileComponent} from "./user/user-profile/user-profile.component";
import {AuthGuardGuard} from "./guard/auth-guard.guard";
import {UserChangePasswordComponent} from "./user/user-change-password/user-change-password.component";
import {PlaySongComponent} from "./home/play-song/play-song.component";
import {UserSongComponent} from "./user/song/user-song/user-song.component";
import {EditSongComponent} from "./song/edit-song/edit-song.component";
import {UserPlaylistComponent} from "./user/playlist/user-playlist/user-playlist.component";
import {PlaylistComponent} from "./playlist/playlist/playlist.component";
import {CreateSongComponent} from "./song/create-song/create-song.component";
import {PlayPlaylistComponent} from "./home/play-playlist/play-playlist.component";
import {SearchComponent} from "./home/search/search.component";
import {NavbarMenuComponent} from "./home/navbar-menu/navbar-menu.component";


const routes: Routes = [
  {
    path: 'navMenu',component: NavbarMenuComponent
  },
  {
    path: 'song',
    loadChildren: () => import('./song/song.module').then(module => module.SongModule)
  },
  {
    path: 'playlist',
    loadChildren: () => import('./playlist/playlist.module').then(module => module.PlaylistModule)
  },
  {
    path: 'navMenu',
    loadChildren: () => import('./home/navbar-menu/navbar-menu.module').then(module => module.NavbarMenuModule)
  },

  {
    path: '', component: LayoutComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'song/:id', component: PlaySongComponent
  },
  {
    path: 'playlists/play/:id', component: PlayPlaylistComponent
  },
  {
    path: 'search',
    component:SearchComponent },
  {
    path: 'search/playlists/:id',
    component:PlayPlaylistComponent },

  {
    path: 'userProfile',
    component: UserProfileComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'userListSong',
    component: UserSongComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'userplaylist',
    component: PlaylistComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'userListSong/create',
    component: CreateSongComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: "userListSong/edit/:id",
    component: EditSongComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'userListSong/song/:id', component: PlaySongComponent
  },
  {
    path: 'changePassword',
    component: UserChangePasswordComponent,
    canActivate: [AuthGuardGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
