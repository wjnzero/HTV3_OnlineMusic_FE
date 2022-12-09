import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  token = localStorage.getItem('auth-token');
  // tslint:disable-next-line:variable-name
  headers_object = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
  httpOptions = {
    headers: this.headers_object
  };
  // @ts-ignore
  id: string;

  constructor() { }

  // tslint:disable-next-line:contextual-lifecycle use-lifecycle-interface
  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getHttp(){
    return this.httpOptions;
  }

  // tslint:disable-next-line:typedef
  getID(): string {
    // @ts-ignore
    return this.idUser = sessionStorage.getItem('id_User');
  }
}
