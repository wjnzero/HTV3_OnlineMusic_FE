import {Component, OnInit} from '@angular/core';
import {Track} from "../../lib/ngx-audio-player/model/track";
import {SongTemp} from "../../model/songTemp";
import {SongService} from "../../service/song/song.service";

declare var $: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{




msaapDisplayTitle = true;
msaapDisplayPlayList = true;
msaapPageSizeOptions = [2,4,6];
msaapDisplayVolumeControls = true;
msaapDisplayRepeatControls = true;
msaapDisplayArtist = false;
msaapDisplayDuration = false;
msaapDisablePositionSlider = true;

// Material Style Advance Audio Player Playlist
msaapPlaylist: Track[] = [
  {
    title: '1',
    link: 'https://firebasestorage.googleapis.com/v0/b/htv3-8f33d.appspot.com/o/file_mp3%2Fy2mate.com%20-%20Kh%C3%A1%20b%E1%BA%A3nh%20vihouse%20nonstop%20999%20%C4%91%C3%B3a%20h%E1%BB%93ng%20.mp3?alt=media&token=cbd68f37-35ee-4868-8d5f-f0376249c9c0',
    artist: 'Audio One Artist'
  },
  {
    title: '2',
    link: 'https://dl.dropboxusercontent.com/s/9v0psowra7ekhxo/A%20Himitsu%20-%20In%20Love%20%28feat.%20Nori%29.flac?dl=0',
    artist: 'Audio Two Artist'
  }
];

  constructor(private songService: SongService) {
  }

  ngOnInit(): void {
    this.songService.getAll().subscribe(songs => {

      // @ts-ignore
      for (let i = 0; i < songs.length; i++) {
        let temp : Track={link:songs[i].fileMp3, title: songs[i].name, artist:songs[i].avatar }
        // @ts-ignore
        this.msaapPlaylist.push(temp);
      }
    });
    console.log(this.msaapPlaylist);
  }


  onEnded($event: string) {

  }
}
