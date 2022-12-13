import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {environment} from "../enronments/environment";
import {FormUploadComponent} from "./upload/form-upload/form-upload.component";
import {ListUploadComponent} from "./upload/list-upload/list-upload.component";
import {DetailsUploadComponent} from "./upload/details-upload/details-upload.component";
import {PosterComponent} from "./core/poster/poster.component";
import {FooterComponent} from "./home/footer/footer.component";
import {LayoutComponent} from "./home/layout/layout.component";
import {NavbarMenuComponent} from "./home/navbar-menu/navbar-menu.component";
import {NavbarLoginResisterComponent} from "./home/navbar-login-resister/navbar-login-resister.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import {SongModule} from "./song/song.module";
import {UserProfileComponent} from "./user/user-profile/user-profile.component";
import {NavbarUserComponent} from "./user/navbar-user/navbar-user.component";
import {UserSongComponent} from "./user/song/user-song/user-song.component";
import {UserCreateSongComponent} from "./user/song/user-create-song/user-create-song.component";
import {UserEditSongComponent} from "./user/song/user-edit-song/user-edit-song.component";
import { UserChangePasswordComponent } from './user/user-change-password/user-change-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {AngMusicPlayerModule} from "ang-music-player";
import {PlaylistModule} from "./playlist/playlist.module";


@NgModule({
  declarations: [
    AppComponent,
    FormUploadComponent,
    ListUploadComponent,
    DetailsUploadComponent,

    PosterComponent,
    FooterComponent,
    LayoutComponent,
    NavbarMenuComponent,
    NavbarLoginResisterComponent,
    LoginComponent,
    RegisterComponent,
    UserSongComponent,
    UserCreateSongComponent,
    UserEditSongComponent,
    UserProfileComponent,
    NavbarUserComponent,
    UserChangePasswordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    SongModule,
    PlaylistModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    AngMusicPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
