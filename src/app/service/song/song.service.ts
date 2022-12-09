import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Song} from "../../model/song";
import {environment} from 'src/enronments/environment';

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class SongService {
  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Song[]> {
    let url = API_URL + '/songs/';
    console.log(url)
    return this.httpClient.get<Song[]>(url);
  }

  // getSongByUser(id: any): Observable<Song> {
  //   let url = API_URL + '/songs/findByUser/' + `${id}`
  //   return this.httpClient.get<Song>(url);
  // }

  save(song: Song): Observable<any> {
    let url = API_URL + '/songs/create'
    return this.httpClient.post<Song>(url,song);
  }

  getById(id: any): Observable<any> {
    return this.httpClient.get(API_URL + `/songs/${id}`);
  }

  getByName(name: any): Observable<any> {
    return this.httpClient.get(API_URL + `/search?name=` + `${name}`)
  }

  delete(id: number) {
    let url = API_URL + '/songs/delete/' + `${id}`
    console.log(url)
    return this.httpClient.delete(url);

  }

  // editSong(id: number, temp: Song) {
  //   return this.httpClient.put<Song>(`${API_URL}/${id}`, temp);
  // }
  update(song: any, id: any): Observable<Song> {

    return this.httpClient.put(API_URL + `/songs/edit/${id}`, song);
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
