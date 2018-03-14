import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
	<nav>
    <div class="nav-wrapper blue lighten-1">
      <a style="margin-left:10px;" href="#" class="brand-logo left">M5Power</a>
      <ul id="nav-mobile" class="right">
      	<li><a href="/mcars">Search</a></li>
        <li><a href="/login">Login</a></li>
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
