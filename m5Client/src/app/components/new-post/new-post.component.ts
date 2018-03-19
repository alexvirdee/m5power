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
  	
  }

  constructor() { }

  ngOnInit() {
  }

}
