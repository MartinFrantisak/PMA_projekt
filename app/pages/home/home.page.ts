import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }
  goToAbout() {
    this.router.navigate(['../tabs/about'])
  }
  goToSearch() {
    this.router.navigate(['../tabs/search'])
  }
  goToFavourite() {
    this.router.navigate(['../tabs/favourite'])
  }


  ngOnInit() {
  }

}
