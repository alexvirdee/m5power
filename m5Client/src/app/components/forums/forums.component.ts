import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { McarsService } from "../../services/mcars.service";
import { AuthService } from "../../services/auth.service";
import { environment } from "../../../environments/environment";

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css']
})
export class ForumsComponent implements OnInit {
 currentUser: string;
 mcar = <any>{};
 baseUrl = environment.apiBase;

  constructor(private myAuthService: AuthService, private myRouter: Router, private mcarService: McarsService) { }

  ngOnInit() {
  	this.myAuthService
      .checklogin()
      // If success, we are logged in.
      .then(resultFromApi => {
        this.currentUser = resultFromApi;
        console.log("user is: ", resultFromApi);
      })

      // Even if you don't do anything on error, catch to avoid a console error.
      .catch(err => {
        console.log(err);
        this.myRouter.navigate(["/"]);
      });
    // this.getTheMCars()
  }

   // get phone and its details
  getCarDetails(id) {
    this.mcarService.getId(id)
      .then( res => {
        this.mcar = res;
        console.log("Car details ", this.mcar);
      })
      .catch()
  }

}
