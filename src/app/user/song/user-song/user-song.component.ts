import {Component, OnInit} from '@angular/core';
import {Song} from "../../../model/song";
import {SongService} from "../../../service/song/song.service";
import {UserService} from "../../../service/user/user.service";
import {HttpService} from "../../../service/http-service.service";
import {User} from "../../../model/user";

@Component({
  selector: 'app-user-song',
  templateUrl: './user-song.component.html',
  styleUrls: ['./user-song.component.css']
})
export class UserSongComponent implements OnInit {
  // @ts-ignore
  user: User;
  userid: any;
  songList: Song[] = [];

  constructor(private songService: SongService,
              private userService: UserService,
              private httpService: HttpService) {
  }

  ngOnInit(): void {

  }

  getSongByUser() {
    this.userid = Number(this.httpService.getID());
    this.userService.getUserById(String(this.userid)).subscribe(userId => {
      this.user = userId;
    })
  }


}
