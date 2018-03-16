import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { McarsService } from "../../services/mcars.service";
import { AuthService } from "../../services/auth.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  constructor(private myAuthService: AuthService, private myRouter: Router, private myCarService: McarsService) { }

  ngOnInit() {
  }

   getTheMCars() {
    this.myCarService.getAllCars() 
    .subscribe(allTheCars => {
      console.log("allTheCars: ", allTheCars)
        this.mcars = allTheCars;
        console.log("mcars", this.mcars)
      },
      () => {
        this.carsListError = "Sorry, no cars are here.";
      }
    );
  } // close getTheMCars()

}
