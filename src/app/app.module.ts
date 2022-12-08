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
import { SearchComponent } from './song/search/search.component';
import { ListSongComponent } from './song/list-song/list-song.component';
import {SongModule} from "./song/song.module";



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
<<<<<<< HEAD

=======
    SearchComponent,
    ListSongComponent,
>>>>>>> 90d2cdc9cde9767775680d106c25e4a1dc1863ac

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
    SongModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
