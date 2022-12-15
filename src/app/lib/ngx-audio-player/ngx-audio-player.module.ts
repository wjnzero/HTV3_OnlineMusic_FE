import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MatSliderModule } from '@angular/material/slider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AudioPlayerComponent } from './component/ngx-audio-player/ngx-audio-player.component';
import {SecondsToMinutesPipe} from "./pipe/seconds-to-minutes.pipe";
import {MatLegacySliderModule} from "@angular/material/legacy-slider";



@NgModule({
  declarations: [SecondsToMinutesPipe, AudioPlayerComponent],
  imports: [CommonModule, FormsModule, MatButtonModule, MatCardModule, MatTableModule, MatFormFieldModule,
     MatExpansionModule, MatPaginatorModule, MatIconModule, MatLegacySliderModule],
  exports: [AudioPlayerComponent]
})
export class NgxAudioPlayerModule { }
