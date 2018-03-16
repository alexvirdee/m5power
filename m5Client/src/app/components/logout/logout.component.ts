import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private myAuth: AuthService, private myRouter: Router) { }

  ngOnInit() {
  	this.loggedOut();
  }

  loggedOut() {
  	this.myAuth.logout()
  		.then(res => {
  			this.myRouter.navigate(['signup']);
  		})
  }

}
