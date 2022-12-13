import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./home/layout/layout.component";
import {LoginComponent} from "./core/login/login.component";
import {RegisterComponent} from "./core/register/register.component";
import {UserProfileComponent} from "./user/user-profile/user-profile.component";
import {AuthGuardGuard} from "./guard/auth-guard.guard";
import {UserChangePasswordComponent} from "./user/user-change-password/user-change-password.component";


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
    path: 'playlist',
    loadChildren: () => import('./playlist/playlist.module').then(module => module.PlaylistModule)
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
    path: 'userProfile',
    component: UserProfileComponent,
    canActivate: [AuthGuardGuard]
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
