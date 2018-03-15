import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  constructor( private myHttp:Http ) { }


  signup(componentInfo) {
  	return this.myHttp.post(`${environment.apiBase}/auth/signup`,

  	{
  		signUpUsername: componentInfo.username,
  		signUpPassword: componentInfo.password
  	}

  	)

  	// convert from observable to promise
  	.toPromise()

  	// parse the JSON
  	.then(res => res.json())
  }


   login(componentInfo) {
    return (
      this.myHttp
        .post(
          `${environment.apiBase}/auth/login`,

          // Form body information to send to the back end (req.body)
          {
            loginUsername: componentInfo.username,
            loginPassword: componentInfo.password
          },

          // Send the cookies across domains
          { withCredentials: true }
        )

        // Convert from observable to promise
        .toPromise()

        // Parse the JSON
        .then(res => res.json())
    );
  } // close login()


  logout() {
    return (
      this.myHttp
        .post(
          `${environment.apiBase}/auth/logout`,

          // Nothing to send to the back end (req.body)
          {},

          // Send the cookies across domains
          { withCredentials: true }
        )

        // Convert from observable to promise
        .toPromise()

        // Parse the JSON
        .then(res => res.json())
    );
  } // close logout()



  checklogin() {
    return (
      this.myHttp
        .get(
          `${environment.apiBase}/auth/checklogin`,

          // Send the cookies across domains
          { withCredentials: true }
        )

        // Convert from observable to promise
        .toPromise()

        // Parse the JSON
        .then(res => res.json())
    );
  } // close checklogin()




}
