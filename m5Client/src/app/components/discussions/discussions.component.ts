import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { McarsService } from "../../services/mcars.service";
import { PostService } from "../../services/post.service";
import { AuthService } from "../../services/auth.service";
import { environment } from "../../../environments/environment";


import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.css']
})
export class DiscussionsComponent implements OnInit {
 
  replyData = {
 	content: ""
 }

 post = <any>{};
 mcar = <any>{};
 currentUser: string;
 savingErr: string
 baseUrl = environment.apiBase;
 replies: any;


updatedPostDiscussion: String;
updatedPost: Object = {};

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
     this.myRoute.params.subscribe(params => {
      this.getPostDetails(params["id"]);
    });
  }


    // get car and its details
  getCarDetails(id) {
    this.mcarService.getId(id)
      .then( res => {
        this.mcar = res;
        console.log("This is the response: " + res);
      })
      .catch()
  }

  // get post and its details
  getPostDetails(id) {
  	this.postService.getId(id)
  		.then( res => {
  			this.post = res;
  			this.replies = this.post.discussion;
  			console.log("Here are the post details: ", this.post);
  		})
  		.catch()
  }

  saveNewReply(id, replyData) {
  	this.postService.addDiscussionOnPost(id, this.replyData)
  	const replyInfo = replyData.form.controls;
  	this.updatedPostDiscussion = replyInfo.content.value;
  	this.sendUpdatesToApi(id)
  }

  sendUpdatesToApi(id) {
  	console.log("sending data to api");
  	this.updatedPost = {discussion: this.updatedPostDiscussion}
  	this.postService.addDiscussionOnPost(id, this.updatedPost)
  		.toPromise()
  		.then(res => {
  			this.myRouter.navigate(['/forums', this.post._id, 'discussions'])
  		})
  		.catch(err => {
  			console.log("Error adding the discussion to this post ", err);
  		})
  }


}
