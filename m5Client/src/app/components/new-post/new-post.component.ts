import { Component, OnInit } from '@angular/core';
import { McarsService } from '../../services/mcars.service';
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
  }

}
