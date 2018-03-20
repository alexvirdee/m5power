import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { RouterGuardService } from "../../services/router-guard.service";

@Component({
  selector: 'app-navbar',
  template: `
	<nav>
    <div class="nav-wrapper">
      <a style="margin-left:10px;" [routerLink]="['']" class="brand-logo left"><img class="nav-logo" src="../../assets/images/M5Power.png" alt="logo" /></a>
      <ul id="nav-mobile" class="right">
        <li><a [routerLink]="['search']">Search</a></li>
      	<li><a [routerLink]="['forums']">Forums</a></li>
        <li><a  [routerLink]="['login']">Login</a></li>
        <li><a  *ngIf="user" ng-click=”logMeOutPls()” [routerLink]="['logout']">Logout</a></li>
      </ul>
    </div>
  </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  check: boolean = false;
  logoutError: string;
  user: any;

  constructor(private myAuthService: AuthService, private myRouter: Router) { }

  ngOnInit() {
    this.myAuthService.checklogin()
      // if success we are logged in
      .then(res => {
        this.user = res;
      })

      .catch(err => {
        console.log(err);
      })
  }

  checkIfLoggedIn() {
    this.myAuthService.checklogin()
      // if success we are logged in
      .then(res => {
        this.check = true
        console.log("check login function")
      })

      .catch(err => {
        console.log(err);
      })
  }
  

  logMeOutPls() {
    this.myAuthService
      .logout()
      .then(() => {
        this.myRouter.navigate(["/"]);
      })
      .catch(() => {
        this.logoutError = "Log out went bad.";
      });
  } // close logMeOutPls()

}
