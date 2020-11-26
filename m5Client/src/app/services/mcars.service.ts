import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class McarsService {

  constructor( private mcarsHttp: HttpClient ) { }

   getAllCars(){
    return this.mcarsHttp.get(`${environment.apiBase}/api/mcars`,
    { withCredentials: false })
    .map(res => res.json())
  }

  createNewCar(dataToSend) {
      return this.mcarsHttp.post(`${environment.apiBase}/api/mcars/new`, 
        dataToSend, 
        { withCredentials: true})
      .toPromise()
      .then(res => res.json());
  }

  getId(id){
    return this.mcarsHttp.get(`${environment.apiBase}/api/mcars/${id}`,
          { withCredentials: true })
          .toPromise()
          .then(res => res.json())
          // .map(res => res.json())
  }


 
}
