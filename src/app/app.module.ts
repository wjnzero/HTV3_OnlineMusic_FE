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
import {CreateSongComponent} from "./song/create-song/create-song.component";
import {DeleteSongComponent} from "./song/delete-song/delete-song.component";
import {EditSongComponent} from "./song/edit-song/edit-song.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { LayoutComponent } from './home/layout/layout.component';
import { FooterComponent } from './home/footer/footer.component';
import { NavbarLoginResisterComponent } from './home/navbar-login-resister/navbar-login-resister.component';
import {ListSongComponent} from "./song/list-song/list-song.component";
import { NavbarMenuComponent } from './home/navbar-menu/navbar-menu.component';
import { PosterComponent } from './core/poster/poster.component';
@NgModule({
  declarations: [
    AppComponent,
    FormUploadComponent,
    ListUploadComponent,
    DetailsUploadComponent,
    CreateSongComponent,
    DeleteSongComponent,
    EditSongComponent,
    ListUploadComponent,
    ListSongComponent,
    LayoutComponent,
    FooterComponent,
    NavbarLoginResisterComponent,
    NavbarMenuComponent,
    PosterComponent
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
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
