import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class McarsService {

  constructor( private mcarsHttp: Http ) { }

   getAllCars(){
    return this.mcarsHttp.get(`${environment.apiBase}/api/mcars`,
    { withCredentials: false })
    .map(res => res.json())
  }

  createNewCar(dataToSend) {
  	return this.mcarsHttp.post(`${environment.apiBase}/api/phones`, 
  		dataToSend, 
  		{ withCredentials: true})
  	.toPromise()
  	.then(res => res.json());
  }

 
}
