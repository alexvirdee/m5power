import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { McarsService } from "../../services/mcars.service";
import { AuthService } from '../../services/auth.service';
import { FileUploader } from 'ng2-file-upload';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-new-mcar',
  templateUrl: './new-mcar.component.html',
  styleUrls: ['./new-mcar.component.css']
})
export class NewMcarComponent implements OnInit {

 mcarData = {
 	modelM: "",
 	year: "",
 	specs: ""
 }

 savingErr: string

 mcarUploader = new FileUploader({
 	url: environment.apiBase + "/api/mcars/new",
 	itemAlias: "mcarPhoto"
 });

  constructor( private myRouter: Router, private MCarService: McarsService, private myAuth: AuthService ) { }

  ngOnInit() {
  	this.myAuth
  		.checklogin()
  		// on success the user is logged in
  		.then()
  		// catch to avoid a console error
  		.catch(err => {
  			console.log(err);
  			this.myRouter.navigate(["/"]);
  		});
  }

  saveNewMcar() {
  	if (this.mcarUploader.getNotUploadedItems(). length === 0) {
  		this.saveMCarNoImage();
  	} else {
  		this.saveMCarWithImage();
  	}
  }

  private saveMCarNoImage() {
  	this.MCarService.createNewCar(this.mcarData)
  	.then( res => {
  		this.mcarData = {
  			modelM: "",
 			year: "",
 			specs: ""
  		}
  		this.savingErr = "";
  		this.myRouter.navigate(['/search'])
  	})
  	.catch(err => {
  		this.savingErr = "Something went wrong with saving the car"
  	})
  }


 private saveMCarWithImage() {
 	this.mcarUploader.onBuildItemForm = (item, form) => {
      form.append('modelM', this.mcarData.modelM);
      form.append("year", this.mcarData.year);
      form.append("specs", this.mcarData.specs);
    }
    this.mcarUploader.onSuccessItem = (item, response) =>{
      this.mcarData = {
          modelM: "",
 		  year: "",
 		  specs: ""
        };
        this.savingErr = ""
        this.myRouter.navigate(["/search"]);
    }
    this.mcarUploader.onErrorItem = (item, response) => {
      this.savingErr = "Saving the post with image went bad. Sorry!";
    }
    this.mcarUploader.uploadAll();
  }


}
