import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Song} from "../model/song";

@Injectable({
  providedIn: 'root'
})
export class SongService {
  API_URL = 'http://localhost:8080/songs'
  constructor(private httpClient: HttpClient) {
  }
  getAll(): Observable<any> {
    return this.httpClient.get(this.API_URL);
  }

  save(song: Song): Observable<any> {
    return this.httpClient.post(this.API_URL, song)
  }

  getById(id: any): Observable<any> {
    return this.httpClient.get(this.API_URL + `/${id}`);
  }

  getByName(name :any):Observable<any>{
    return this.httpClient.get(this.API_URL+`/search?name=`+`${name}`)
  }

  delete(id: number) {
    return this.httpClient.delete(this.API_URL + `/${id}`)

  }

  update(song: any, id: any): Observable<Song> {

    return this.httpClient.put(this.API_URL + `/${id}`, song);
  }
////Sắp xếp bài hát theo lượt xem tăng dần
  sortByView(): Observable<any> {
    return this.httpClient.get(this.API_URL + `/sortByView`)
  }
//Sắp xếp bài hát theo lượt xem giam dần
  sortByViewDesc(): Observable<any> {
    return this.httpClient.get(this.API_URL + `/sortByViewDesc`)
  }
}
