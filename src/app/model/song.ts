import {SongType} from "./songType";
import {Playlist} from "./playlist";

export interface Song {
  id?: number;
  name?: string;
  describeSong?: string;
  fileMp3?: string;
  avatar?: string;
  author?: string;
  singer?: string;
  user?: any;
  songTypeSet?: SongType;
  playListSet?:Playlist;
  album?: any;
  view?: any;
}
