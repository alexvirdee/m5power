import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { McarsService } from "../../services/mcars.service";
import { environment } from "../../../environments/environment";
import { AuthService } from '../../services/auth.service';

// import filter pipe
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
	carsListError: string;
	mcars: any;
	baseUrl = environment.apiBase;
	pattern: string;
  currentUser: string;


  constructor( private myRouter: Router, private myCarService: McarsService, private myAuthService: AuthService ) { }

  ngOnInit() {
  	this.getTheMCars()
    
  }

   getTheMCars() {
    this.myCarService.getAllCars() 
    .subscribe(res => {
        this.mcars = res;
        console.log("mcars", this.mcars)
        console.log("images: ", this.mcars[0].image)
      },
      () => {
        this.carsListError = "Sorry, no cars to list.";
      }
    );
  } // close getTheMCars()


}
  

}
