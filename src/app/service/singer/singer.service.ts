import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Song} from "../../model/song";
import {environment} from "../../../enronments/environment";
import {HttpClient} from "@angular/common/http";
import {Singer} from "../../model/singer";
const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class SingerService {

  constructor(private httpClient: HttpClient) { }

  getSinger(): Observable<Singer[]> {
    let url = API_URL + '/singers/';
    return this.httpClient.get<Singer[]>(url);
  }

  getById(id: any): Observable<any> {
    return this.httpClient.get(API_URL + `/singers/${id}`);
  }
}
