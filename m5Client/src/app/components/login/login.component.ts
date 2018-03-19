import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginInfo = {
		username: "",
		password: ""
	};

	loginErrorMessage: string;

  constructor(private myAuth: AuthService, private myRouter: Router) { }

  ngOnInit() {
    // this.myAuth.checklogin()
    //   // if success we are logged in
    //   .then(res => {
    //     this.myRouter.navigate(['/search']);
    //   })

    //   .catch(err => {
    //     console.log(err);
    //   })
  }

  doLogin() {
  	this.myAuth.login(this.loginInfo)
  		.then((resultFromApi) => {
  			// clear form
  			this.loginInfo = {
  				username: '',
  				password: ''
  			};

  			// clear the error
  			this.loginErrorMessage = "";

  			// redirect to 
  			this.myRouter.navigate(['/search']);
  		})
  		.catch(err => {
  		const parsedError = err.json();
  		this.loginErrorMessage = parsedError.message + " 😤";
  	});
  }

}
