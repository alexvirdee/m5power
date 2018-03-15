import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

signUpInfo = {
	email: "",
  	username: "",
  	password: ""
  };

  errorMessage: string;

  constructor( private myAuth: AuthService, private myRouter: Router ) { }

  ngOnInit() {
  }

  doSignUp() {
  	this.myAuth
  	.signup(this.signUpInfo)
  	.then(resultFromApi => {
  		// clear form
  		this.signUpInfo = { email: "", username: "", password: ""};

  		// clear error message
  		this.errorMessage = "";

  		// redirect to phones
  		this.myRouter.navigate(["/search"]);
  	})
  	.catch(err => {
  		const parsedError = err.json();
  		this.errorMessage = parsedError.message + " 😤";
  	});
  } // close doSignUp()
}

}
