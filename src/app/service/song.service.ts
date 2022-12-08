import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Song} from "../model/song";
import { environment } from 'src/enronments/environment';

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class SongService {
  constructor(private httpClient: HttpClient) {
  }
  getAll(): Observable<Song[]> {
    return this.httpClient.get<Song[]>(API_URL + '/songs' );
  }

  save(song: Song): Observable<any> {
    return this.httpClient.post(API_URL, song)
  }

  getById(id: any): Observable<any> {
    return this.httpClient.get(API_URL + `/${id}`);
  }

  getByName(name :any):Observable<any>{
    return this.httpClient.get(API_URL+`/search?name=`+`${name}`)
  }

  delete(id: number) {
    return this.httpClient.delete(API_URL + `/${id}`)

  }
  editSong(id: number, temp: Song) {
    return this.httpClient.put<Song>(`${API_URL}/${id}`, temp);
  }
  // update(song: any, id: any): Observable<Song> {
  //
  //   return this.httpClient.put(API_URL + `/${id}`, song);
  // }
////Sắp xếp bài hát theo lượt xem tăng dần
  sortByView(): Observable<any> {
    return this.httpClient.get(API_URL + `/sortByView`)
  }
//Sắp xếp bài hát theo lượt xem giam dần
  sortByViewDesc(): Observable<any> {
    return this.httpClient.get(API_URL + `/sortByViewDesc`)
  }
}
