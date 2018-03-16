import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class McarsService {

  constructor( private mcarsHttp: Http ) { }

   getAllCars(){
    return this.mcarsHttp.get(`${environment.apiBase}/api/mcars`,
    { withCredentials: true })
    .map(res => res.json())
  }

}
