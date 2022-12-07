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
import { ListSongComponent } from './song/list-song/list-song.component';
import { DeleteSongComponent } from './song/delete-song/delete-song.component';
import { UpdateSongComponent } from './song/update-song/update-song.component';


@NgModule({
  declarations: [
    AppComponent,
    FormUploadComponent,
    ListUploadComponent,
    DetailsUploadComponent,
    ListSongComponent,
    DeleteSongComponent,
    UpdateSongComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
