
import firebase from "firebase/compat";
import User = firebase.User;


export interface Playlist {

  id?: number;
  name: string;
  timeCreate: string;
  lastTimeEdit: string;
  user?: User[];
}
