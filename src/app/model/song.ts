import {SongType} from "./songType";
import {Playlist} from "./playlist";
import {Author} from "./author";

export interface Song {
  id?: number;
  name?: string;
  describeSong?: string;
  fileMp3?: string;
  avatar?: string;
  author?: Author;
  singer?: string;
  user?: any;
  songTypeSet?: SongType;
  playListSet?:Playlist;
  album?: any;
  view?: any;
  dateCreateSong?: string;
}


