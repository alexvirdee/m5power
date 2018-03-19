import { Component, OnInit } from '@angular/core';
import { McarsService } from '../../services/mcars.service';
import { PostService } from '../../services/post.service';
import { FileUploader } from 'ng2-file-upload';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
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

  savingErr: string

  postUploader = new FileUploader({
    url: environment.apiBase + "/api/mcars/:id/post/new",
    itemAlias: "postImage"
  });

  constructor(private mcarService: McarsService, 
  			  private myAuth: AuthService, 
  			  private myRouter: Router) { }

  ngOnInit() {
  	this.myAuth
  		.checklogin()
  		// on success user is logged in
  		.then()
  		// catch to avoid a console error
  		.catch(err => {
        console.log(err);
        this.myRouter.navigate(["/"]);
      });
  }


  saveNewPost() {
	if (this.postUploader.getNotUploadedItems().length === 0) {
		this.savePostNoImage();
	} else {
		this.savePostWithImage();
		}
	}

	private savePostNoImage() {
  	this.PostService.createNewPost(this.postData)
  	.then( res =>  {

  		this.postData = {
  			title: "",
  			text: ""
  		}
  		this.savingErr = "";
  		this.myRouter.navigate(['/searcg'])
  	})
  	.catch(err => {
  		this.savingErr = "Something went wrong with saving your post "
  	}) 
  }


  private savePostWithImage(){
    this.postUploader.onBuildItemForm = (item, form) => {
      form.append('title', this.postData.title);
      form.append("text", this.postData.text);
    }
    this.postUploader.onSuccessItem = (item, response) =>{
      this.postData = {
          title: "",
  		  text: ""
        };
        this.savingErr = ""
        this.myRouter.navigate(["/search"]);
    }
    this.postUploader.onErrorItem = (item, response) => {
      this.savingErr = "Saving the post with image went bad. Sorry!";
    }
    this.postUploader.uploadAll();
  }







}
