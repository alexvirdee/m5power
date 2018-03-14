import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
	<nav>
    <div class="nav-wrapper">
      <a style="margin-left:10px;" [routerLink]="['']" class="brand-logo left"><img class="nav-logo" src="../../assets/images/M5Power.png" alt="logo" /></a>
      <ul id="nav-mobile" class="right">
      	<li><a [routerLink]="['search']">Search</a></li>
        <li><a [routerLink]="['login']">Login</a></li>
      </ul>
    </div>
  </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
