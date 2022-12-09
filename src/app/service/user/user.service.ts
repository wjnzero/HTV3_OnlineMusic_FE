import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../enronments/environment";
import {HttpService} from "../http-service.service";
import {Password} from "../../model/password";
import {Observable} from "rxjs";
import {User} from "../../model/user";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
              private httpService: HttpService) { }

  changePassword(data: Password, idUser: string): Observable<any> {
    console.log(this.httpService.getHttp());
    return this.http.put(API_URL + '/home/user/changePassword/' + idUser, data, this.httpService.getHttp());
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(API_URL + '/home/user/' + id, this.httpService.getHttp());
  }

  updateUser(idUser: number, user: User): Observable<any> {
    return this.http.put(API_URL + `/home/user/${idUser}`, user , this.httpService.getHttp());
  }
}
