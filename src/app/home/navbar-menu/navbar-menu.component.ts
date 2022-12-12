import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SongService} from "../../service/song/song.service";
import {Router} from "@angular/router";
import {Song} from "../../model/song";

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent {

  isLoggedIn?: boolean;
  searchForm!: FormGroup;
  songs : Song [] = [];

  constructor(private songService: SongService,
              private router: Router,
              private formBuilder: FormBuilder,) {
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group(
      {
        nameSearch: ['']
      });
    if (localStorage.getItem('auth-token')){
      this.isLoggedIn = true;
    }
  }

  // tslint:disable-next-line:typedef
  search() {
    // @ts-ignore
    this.router.navigate(['/search'], { queryParams: { name: this.searchForm.value.nameSearch } });
  }
  // search(){
  //   // @ts-ignore
  //   let name = document.getElementById("name").value
  //   this.songService.getByName(name).subscribe(value => {
  //     this.songs = value
  //     console.log(value)
  //   })
  // }

  // tslint:disable-next-line:typedef
  changePage() {
    // @ts-ignore
    this.router.navigate(['/login'] );
  }
}
