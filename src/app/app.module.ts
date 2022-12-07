import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddSongComponent } from './song/add-song/add-song.component';
import { SongserviceComponent } from './service/songservice/songservice.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSongComponent,
    SongserviceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
