import { Component } from '@angular/core';
import {User} from "../../model/user";
import {Router} from "@angular/router";
import {UserService} from "../../service/user/user.service";
import {HttpService} from "../../service/http-service.service";

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent {

  user?: User;
  idUser?: string;
  constructor(private route: Router,
              private userService: UserService,
              private httpService: HttpService) { }

  ngOnInit(): void {
    this.idUser = this.httpService.getID();
    this.userService.getUserById(this.idUser).subscribe(res => {
      this.user = res;
    });
  }

  // tslint:disable-next-line:typedef
  logout(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('id');
    sessionStorage.clear();
    this.route.navigate(['']);
  }

}
