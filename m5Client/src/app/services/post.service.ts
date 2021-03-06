import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  constructor( private myHttp: HttpClient ) { }

  getAllPosts(carId){
    return this.myHttp.get(`${environment.apiBase}/api/mcars/${carId}/posts`,
    { withCredentials: false })
    .map(res => res.json())
  }

  createNewPost(carId, dataToSend) {
  	// console.log("data", dataToSend)
  	return this.myHttp.post(`${environment.apiBase}/api/mcars/${carId}/post/new`, 
  		dataToSend, 
  		{ withCredentials: true})
  	.toPromise()
  	.then(res => res.json());
  }

  getId(carId){
    return this.myHttp.get(`${environment.apiBase}/api/mcars/${carId}/post`,
          { withCredentials: true })
          .toPromise()
          .then(res => res.json())
          // .map(res => res.json())
  }


  addDiscussionOnPost(carId, postId, updates) {
    return this.myHttp.put(`${environment.apiBase}/api/mcars/${carId}/post/${postId}/edit`, updates, { withCredentials: true })
    .map(res => res.json()); 
  }



}


