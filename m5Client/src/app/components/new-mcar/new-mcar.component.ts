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
 	itemAlias: "mcarImage"
 });

  constructor( private myRouter: Router, private myCarService: McarsService, private myAuth: AuthService ) { }

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

  saveMCarNoImage() {

  }


  saveMCarWithImage() {
  	
  }


}
