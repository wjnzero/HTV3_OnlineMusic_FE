import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Song} from "../../model/song";
import {PlaylistService} from "../../service/playlist/playlist.service";
import {Playlist} from "../../model/playlist";
import {Commentplaylist} from "../../model/commentplaylist";
import {CommentplaylistService} from "../../service/comment/commentplaylist.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from "../../model/user";
import {Track} from "../../lib/ngx-audio-player/model/track";
import {UserService} from "../../service/user/user.service";
import {HttpService} from "../../service/http-service.service";

declare var $: any;

@Component({
  selector: 'app-play-playlist',
  templateUrl: './play-playlist.component.html',
  styleUrls: ['./play-playlist.component.css']
})
export class PlayPlaylistComponent implements OnInit {

  id?: number;
  songList: Song[] = [];
  commentPlaylist: Commentplaylist[] = [];
  playlist?: Playlist;
  p?: number;
  page?: number;
  totalLike: any;
  isLoggedIn?: boolean;
  form!: FormGroup;
  user?: User;

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2, 4, 6];
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = false;
  msaapDisplayDuration = false;
  msaapDisablePositionSlider = false;

  titleHead: string = "Bài Hát";
  nameAlbum: string = "";


// Material Style Advance Audio Player Playlist


  msaapPlaylist: Track[] = [];


  constructor(private playlistService: PlaylistService,
              private commentPlaylistService: CommentplaylistService,
              private router: ActivatedRoute, private formBuild: FormBuilder,private userService: UserService,private httpService: HttpService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('auth-token')) {
      this.isLoggedIn = true;
    }
    this.form = this.formBuild.group({
      comment: ['']
    });
    // Lấy user - lấy tạm dùng sau
    this.userService.getUserById(this.httpService.getID()).subscribe(res => {
      this.user = res;
      // console.log(this.user);
    });
    this.id = Number(this.router.snapshot.paramMap.get('id'));
    // this.commentPlaylistService.getTotalLikePlaylist(this.id).subscribe(countLike => {
    //   this.totalLike = countLike;
    // });
    this.commentPlaylistService.getCommentByPlaylist(this.id).subscribe(comments => {
      this.commentPlaylist = comments;
      console.log(this.commentPlaylist);
      console.log(comments);
    }, error => {
      console.log(error);
    });
    this.playlistService.getById(this.id).subscribe(res => {
      this.playlist = res;
      this.playlistService.showSongInPlaylist(this.id).subscribe(songs => {
        this.songList = songs;
        for (let i = 0; i < this.songList.length; i++) {
          let track: Track = {link: this.songList[i].fileMp3, title: this.songList[i].name}
          this.msaapPlaylist.push(track);
        }
        this.nameAlbum = this.playlist?.name + "";
      });
      // tslint:disable-next-line:only-arrow-functions
      // $(() => {
      //   const audio = new Audio();
      //   const playerTrack = $('#player-track');
      //   const bgArtwork = $('#bg-artwork');
      //   // tslint:disable-next-line:prefer-const
      //   let bgArtworkUrl: any;
      //   const albumName = $('#album-name');
      //   const trackName = $('#track-name');
      //   // tslint:disable-next-line:one-variable-per-declaration prefer-const
      //   // @ts-ignore
      //   let albumArt = $('#album-art'),
      //     // tslint:disable-next-line:prefer-const
      //     sArea = $('#s-area'),
      //     // tslint:disable-next-line:prefer-const
      //     seekBar = $('#seek-bar'),
      //     // tslint:disable-next-line:prefer-const
      //     trackTime = $('#track-time'),
      //     // tslint:disable-next-line:prefer-const
      //     insTime = $('#ins-time'),
      //     // tslint:disable-next-line:prefer-const
      //     sHover = $('#s-hover'),
      //     // tslint:disable-next-line:prefer-const
      //     playPauseButton = $('#play-pause-button'),
      //     // tslint:disable-next-line:prefer-const
      //     playRandomButton = $('#play-random-button'),
      //     // tslint:disable-next-line:prefer-const
      //     i = playPauseButton.find('i'),
      //     // tslint:disable-next-line:prefer-const
      //     tProgress = $('#current-time'),
      //     // tslint:disable-next-line:prefer-const
      //     tTime = $('#track-length'),
      //
      //     seekT:any, seekLoc:any, seekBarPos, cM, ctMinutes, ctSeconds, curMinutes, curSeconds, durMinutes, durSeconds, playProgress, bTime: any,
      //     nTime = 0,
      //     buffInterval:NodeJS.Timeout, tFlag = false;
      //
      //   // tslint:disable-next-line:one-variable-per-declaration prefer-const
      //   let playPreviousTrackButton = $('#play-previous'), playNextTrackButton = $('#play-next'), currIndex = -1;
      //
      //   // let songs: Song[] = [] = new Array(this.songList.length);/
      //   let songs: Song[] = [];
      //   // tslint:disable-next-line:no-shadowed-variable prefer-for-of
      //   for (let i = 0; i < this.songList.length; i++){
      //     songs[i] = this.songList[i];
      //   }
      //
      //   // tslint:disable-next-line:typedef
      //   function shuffle(a: string | any[]) {
      //     // tslint:disable-next-line:one-variable-per-declaration no-shadowed-variable
      //     let j, x, i;
      //     for (i = a.length - 1; i > 0; i--) {
      //       j = Math.floor(Math.random() * (i + 1));
      //       x = a[i];
      //       // @ts-ignore
      //       a[i] = a[j];
      //       // @ts-ignore
      //       a[j] = x;
      //     }
      //     return a;
      //   }
      //
      //   // tslint:disable-next-line:typedef
      //   function shuffleButton(){
      //      // @ts-ignore
      //     songs = shuffle(songs);
      //   }
      //
      //   // tslint:disable-next-line:typedef
      //   function playPause() {
      //     setTimeout(() => {
      //       if (audio.paused) {
      //         playerTrack.addClass('active');
      //         albumArt.addClass('active');
      //         checkBuffering();
      //         i.attr('class', 'fas fa-pause');
      //         audio.play().then(r => audio );
      //       } else {
      //         playerTrack.removeClass('active');
      //         albumArt.removeClass('active');
      //         // @ts-ignore
      //         clearInterval(buffInterval);
      //         albumArt.removeClass('buffering');
      //         i.attr('class', 'fas fa-play');
      //         audio.pause();
      //       }
      //     }, 300);
      //   }
      //
      //   // tslint:disable-next-line:typedef
      //   function showHover(event: { clientX: number; }) {
      //     seekBarPos = sArea.offset();
      //     seekT = event.clientX - seekBarPos.left;
      //     seekLoc = audio.duration * (seekT / sArea.outerWidth());
      //
      //     sHover.width(seekT);
      //
      //     cM = seekLoc / 60;
      //
      //     ctMinutes = Math.floor(cM);
      //     ctSeconds = Math.floor(seekLoc - ctMinutes * 60);
      //
      //     if ((ctMinutes < 0) || (ctSeconds < 0)) {
      //       return;
      //     }
      //
      //     if ((ctMinutes < 0) || (ctSeconds < 0)) {
      //       return;
      //     }
      //
      //     if (ctMinutes < 10) {
      //       ctMinutes = '0' + ctMinutes;
      //     }
      //     if (ctSeconds < 10) {
      //       ctSeconds = '0' + ctSeconds;
      //     }
      //
      //     // @ts-ignore
      //     if (isNaN(ctMinutes) || isNaN(ctSeconds)) {
      //       insTime.text('--:--');
      //     } else {
      //       insTime.text(ctMinutes + ':' + ctSeconds);
      //     }
      //
      //     insTime.css({left: seekT, 'margin-left': '-21px'}).fadeIn(0);
      //
      //   }
      //
      //   // tslint:disable-next-line:typedef
      //   function hideHover() {
      //     sHover.width(0);
      //     insTime.text('00:00').css({left: '0px', 'margin-left': '0px'}).fadeOut(0);
      //   }
      //
      //   // tslint:disable-next-line:typedef
      //   function playFromClickedPos() {
      //     audio.currentTime = seekLoc;
      //     seekBar.width(seekT);
      //     hideHover();
      //   }
      //
      //   // tslint:disable-next-line:typedef
      //   function updateCurrTime() {
      //     // tslint:disable-next-line:no-shadowed-variable
      //     const nTime = new Date().getTime();
      //
      //     if (!tFlag) {
      //       tFlag = true;
      //       trackTime.addClass('active');
      //     }
      //
      //     curMinutes = Math.floor(audio.currentTime / 60);
      //     curSeconds = Math.floor(audio.currentTime - curMinutes * 60);
      //
      //     durMinutes = Math.floor(audio.duration / 60);
      //     durSeconds = Math.floor(audio.duration - durMinutes * 60);
      //
      //     playProgress = (audio.currentTime / audio.duration) * 100;
      //
      //     if (curMinutes < 10) {
      //       curMinutes = '0' + curMinutes;
      //     }
      //     if (curSeconds < 10) {
      //       curSeconds = '0' + curSeconds;
      //     }
      //
      //     if (durMinutes < 10) {
      //       durMinutes = '0' + durMinutes;
      //     }
      //     if (durSeconds < 10) {
      //       durSeconds = '0' + durSeconds;
      //     }
      //
      //     // @ts-ignore
      //     if (isNaN(curMinutes) || isNaN(curSeconds)) {
      //       tProgress.text('00:00');
      //     } else {
      //       tProgress.text(curMinutes + ':' + curSeconds);
      //     }
      //
      //     // @ts-ignore
      //     if (isNaN(durMinutes) || isNaN(durSeconds)) {
      //       tTime.text('00:00');
      //     } else {
      //       tTime.text(durMinutes + ':' + durSeconds);
      //     }
      //
      //     // @ts-ignore
      //     if (isNaN(curMinutes) || isNaN(curSeconds) || isNaN(durMinutes) || isNaN(durSeconds)) {
      //       trackTime.removeClass('active');
      //     } else {
      //       trackTime.addClass('active');
      //     }
      //
      //
      //     seekBar.width(playProgress + '%');
      //
      //     if (playProgress === 100) {
      //       i.attr('class', 'fa fa-play');
      //       seekBar.width(0);
      //       tProgress.text('00:00');
      //       albumArt.removeClass('buffering').removeClass('active');
      //       // @ts-ignore
      //       clearInterval(buffInterval);
      //       selectTrack(1);
      //     }
      //   }
      //
      //   // tslint:disable-next-line:typedef
      //   function checkBuffering() {
      //     // @ts-ignore
      //     clearInterval(buffInterval);
      //     buffInterval = setInterval(() => {
      //       // @ts-ignore
      //       if ((nTime === 0) || (bTime - nTime) > 1000) {
      //         albumArt.addClass('buffering');
      //       } else {
      //         albumArt.removeClass('buffering');
      //       }
      //
      //       bTime = new Date();
      //       bTime = bTime.getTime();
      //
      //     }, 100);
      //   }
      //
      //   // tslint:disable-next-line:typedef
      //   function selectTrack(flag: number) {
      //     if (flag === 0 || flag === 1) {
      //       ++currIndex;
      //     } else {
      //       --currIndex;
      //     }
      //
      //     if ((currIndex > -1) && (currIndex < songs.length)) {
      //       if (flag === 0) {
      //         i.attr('class', 'fa fa-play');
      //       } else {
      //         albumArt.removeClass('buffering');
      //         i.attr('class', 'fa fa-pause');
      //       }
      //
      //       seekBar.width(0);
      //       trackTime.removeClass('active');
      //       tProgress.text('00:00');
      //       tTime.text('00:00');
      //
      //       const currAlbum = songs[currIndex].name;
      //       const currTrackName = songs[currIndex].user.name;
      //
      //       // @ts-ignore
      //       audio.src = songs[currIndex].fileMp3;
      //
      //       nTime = 0;
      //       bTime = new Date();
      //       bTime = bTime.getTime();
      //
      //       if (flag !== 0) {
      //         audio.play();
      //         playerTrack.addClass('active');
      //         albumArt.addClass('active');
      //
      //         // @ts-ignore
      //         clearInterval(buffInterval);
      //         checkBuffering();
      //       }
      //
      //       albumName.text(currAlbum);
      //       trackName.text(currTrackName);
      //       $('#album-art img').prop('src', bgArtworkUrl);
      //     } else {
      //       if (flag === 0 || flag === 1) {
      //         --currIndex;
      //       } else {
      //         ++currIndex;
      //       }
      //     }
      //   }
      //
      //   // tslint:disable-next-line:typedef
      //   function initPlayer() {
      //
      //     selectTrack(0);
      //
      //     audio.loop = false;
      //
      //     playPauseButton.on('click', playPause);
      //
      //     sArea.mousemove((event: { clientX: number; }) => {
      //       showHover(event);
      //     });
      //
      //     sArea.mouseout(hideHover);
      //
      //     sArea.on('click', playFromClickedPos);
      //
      //     $(audio).on('timeupdate', updateCurrTime);
      //
      //     playPreviousTrackButton.on('click', () => {
      //       selectTrack(-1);
      //     });
      //     playNextTrackButton.on('click', () => {
      //       selectTrack(1);
      //     });
      //
      //     playRandomButton.on('click', shuffleButton);
      //   }
      //
      //   initPlayer();
      // });
    });
  }

  onEnter() {
    const comment = {
      comment_content: this.form?.value.comment,
      userComment: this.user,
      playListComment: this.playlist
    };
    this.commentPlaylistService.updateCommentPlaylist(comment).subscribe(res => {
      this.commentPlaylistService.getCommentByPlaylist(this.playlist?.id).subscribe(data => {
        this.commentPlaylist = data;
        this.form?.reset();
      });
    });
  }

  onEnded($event: string) {

  }
}
