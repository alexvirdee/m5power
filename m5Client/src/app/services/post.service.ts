import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  constructor( private myHttp: Http ) { }

  getAllPosts(){
    return this.myHttp.get(`${environment.apiBase}/api/mcars/:id/posts`,
    { withCredentials: false })
    .map(res => res.json())
  }

  createNewPost(dataToSend) {
  	return this.myHttp.post(`${environment.apiBase}/api/mcars/:id/post/new`, 
  		dataToSend, 
  		{ withCredentials: true})
  	.toPromise()
  	.then(res => res.json());
  }



}
