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
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.css']
})
export class DiscussionsComponent implements OnInit {

   refresh(): void {
    window.location.reload();
}
 
  replyData = {
 	content: ""
 }

 post = <any>{};
 discussion = this.post.discussion
 mcar = <any>{};
 currentUser: string;
 savingErr: string
 baseUrl = environment.apiBase;
 replies: any;
 pattern: string;


updatedPostDiscussion: String;
updatedPost: any = {};

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
  	// get id for car
    this.myRoute.params.subscribe(params => {
      this.getCarDetails(params["id"]);
    });
     this.myRoute.params.subscribe(params => {
      this.getPostDetails(params["postId"]);
    });
  }

    // get car and its details
  getCarDetails(id) {
    this.mcarService.getId(id)
      .then( res => {
        this.mcar = res;
        console.log("This is the mcar res: " + this.mcar);

      })
      .catch()
  }

  // get post and its details
  getPostDetails(id) {
  	this.postService.getId(id)
  		.then( res => {
  			this.post = res;
  			console.dir(this.post)
  			this.replies = this.post.discussion;
  			console.log("Here are the post details: ", this.post);
  		})
  		.catch()
  }



  sendUpdatesToApi(id) {
  	this.updatedPost = {discussion: this.updatedPostDiscussion}
  	this.postService.addDiscussionOnPost(id, this.post._id, this.replyData)
  	// console.log("+++++++++", this.post._id)
  		.toPromise()
  		.then(res => {
  			console.log("response: ", res)
  			// this.myRouter.navigate(['/forums', this.mcar._id, 'discussions', this.post._id ])
  		})
  		.catch(err => {
  			console.log("Error adding the discussion to this post ", err);
  		})
  }




}
