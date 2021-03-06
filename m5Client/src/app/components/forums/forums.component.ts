import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { McarsService } from "../../services/mcars.service";
import { PostService } from "../../services/post.service";
import { AuthService } from "../../services/auth.service";
import { environment } from "../../../environments/environment";

import 'rxjs/add/operator/toPromise';

// filter pipe
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css']
})
export class ForumsComponent implements OnInit {
 mcar = <any>{};
 mcarPosts: any;
 currentUser: string;
 baseUrl = environment.apiBase;
 carsListError: string;
 pattern: string;

  constructor(private myAuthService: AuthService, 
              private myRoute: ActivatedRoute, 
              private myRouter: Router, 
              private mcarService: McarsService,
              private postService: PostService) { }

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
    this.myRoute.params.subscribe(params => {
      this.getCarDetails(params["id"]);
    });
    // this.getCarPosts(carId)
  }

   // get car and its details
  getCarDetails(id) {
    this.mcarService.getId(id)
      .then( res => {
        this.mcar = res;
        this.mcarPosts = this.mcar.posts;
        console.log("McarDetails details posts ", this.mcarPosts);
      })
      .catch()
  }



}
