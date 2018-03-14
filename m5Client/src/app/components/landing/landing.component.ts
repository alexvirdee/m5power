import { Component, OnInit } from '@angular/core';
import { McarsService } from '../../services/mcars.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [McarsService]
})
export class LandingComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  	
  }



}
