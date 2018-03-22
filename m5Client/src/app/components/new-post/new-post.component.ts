import { Component, OnInit } from '@angular/core';
import { McarsService } from '../../services/mcars.service';
import { PostService } from '../../services/post.service';
import { FileUploader } from 'ng2-file-upload';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  postData = {
  	title: "",
  	text: ""
  }
  mcar = <any>{};
  savingErr: string
  userInSess = <any>{};

  postUploader = new FileUploader({
    url: environment.apiBase + "/api/mcars/:id/post/new",
    itemAlias: "postPhoto"
  });

  constructor(private mcarService: McarsService, 
  			  private postService: PostService,
  			  private myAuth: AuthService, 
  			  private myRouter: Router,
  			  private myRoute: ActivatedRoute) { }

  ngOnInit() {
  	this.myAuth
  		.checklogin()
  		// on success user is logged in
  		.then(res => {
  			this.userInSess = res;
  			console.log("user in sess is: ", this.userInSess)
  		})
  		// catch to avoid a console error
  		.catch(err => {
        console.log(err);
        this.myRouter.navigate(["/"]);
      });
  		this.myRoute.params.subscribe(params => {
      this.getCarDetails(params["id"]);
    });
  }

	getCarDetails(id) {
	    this.mcarService.getId(id)
	      .then( res => {
	        this.mcar = res;
	        console.log("Car details ", this.mcar);
	      })
	      .catch()
	  }

    
  saveNewPost(id) {
	if (this.postUploader.getNotUploadedItems().length === 0) {
		this.savePostNoImage(id);
	} else {
		this.savePostWithImage(id);
		}
	}

	private savePostNoImage(id) {
  	this.postService.createNewPost(id, this.postData)
  	.then( res =>  {
  		console.log("this is data from form:", res)
  		this.postData = {
  			title: "",
  			text: ""
  		}
  		this.savingErr = "";
  		this.myRouter.navigate(['/forums', this.mcar._id])
  	})
  	.catch(err => {
  		this.savingErr = "Something went wrong with saving your post "
  	}) 
  }


  private savePostWithImage(id){
    this.postUploader.onBuildItemForm = (item, form) => {
      form.append("title", this.postData.title);
      form.append("text", this.postData.text);
    }
      this.postUploader.onSuccessItem = (item, response) =>{
      this.postData = {
        title: "",
  		  text: ""
        };
        this.savingErr = ""
        this.myRouter.navigate(['/forums', this.mcar._id]);
    }
        this.postUploader.onErrorItem = (item, response) => {
        this.savingErr = "Saving the post with image went bad. Sorry!";
    }
        this.postUploader.uploadAll();
  }

}