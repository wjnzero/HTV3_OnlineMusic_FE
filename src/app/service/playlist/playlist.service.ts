import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from "../../../enronments/environment";
import {Observable} from "rxjs";
import {Playlist} from "../../model/playlist";




const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Playlist[]> {
    let url = API_URL + '/playlist/';
    console.log(url)
    return this.httpClient.get<Playlist[]>(url);
  }
  save(playlist: Playlist,id:any): Observable<any> {
    let url = API_URL + '/playlist/create' + `/${id}`
    return this.httpClient.post<Playlist>(url,playlist);
  }

  getById(id: any): Observable<any> {
    return this.httpClient.get(API_URL + `/playlist/${id}`);
  }

  getPlaylistByName(name: any): Observable<any> {
    return this.httpClient.get(API_URL + `/playlist/search?name=` + `${name}`)
  }

  delete(id: number) {
    let url = API_URL + '/playlist/delete/' + `${id}`
    console.log(url)
    return this.httpClient.delete(url);

  }

  update(id: number, temp: Playlist) {
    return this.httpClient.put<Playlist>(`${API_URL}/playlist/edit/${id}`, temp);
  }


////Sắp xếp bài hát theo lượt xem tăng dần
  sortByView(): Observable<any> {
    return this.httpClient.get(API_URL + `/sortByView`)
  }

//Sắp xếp bài hát theo lượt xem giam dần
  sortByViewDesc(): Observable<any> {
    return this.httpClient.get(API_URL + `/sortByViewDesc`)
  }
}
