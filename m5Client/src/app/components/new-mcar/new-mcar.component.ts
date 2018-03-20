import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { McarsService } from "../../services/mcars.service";
import { AuthService } from '../../services/auth.service';
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

 mcarUploader = new Fileuploader({
 	url: environment.apiBase + "/api/mcars/new",
 	itemAlias: "mcarImage"
 });

  constructor( private myRouter: Router, private myCarService: McarsService, private myAuth: AuthService ) { }

  ngOnInit() {
  }


}
