import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./home/layout/layout.component";

const routes: Routes = [
  {
  path: 'account',
  loadChildren: () => import('./account/account.module').then(module => module.AccountModule)
  },
  {
    path: '', component: LayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
