import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AddSongComponent } from './song/add-song/add-song.component';

import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../enronments/environment";
import {SongService} from "./service/song.service";
import { ListSongComponent } from './song/list-song/list-song.component';
import { EditSongComponent } from './song/edit-song/edit-song.component';
import { DeleteSongComponent } from './song/delete-song/delete-song.component';
import { CreateSongComponent } from './song/create-song/create-song.component';


@NgModule({
  declarations: [
    AppComponent,
    AddSongComponent,
    ListSongComponent,
    EditSongComponent,
    DeleteSongComponent,
    CreateSongComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
