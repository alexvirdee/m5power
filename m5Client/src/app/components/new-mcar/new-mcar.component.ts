import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { McarsService } from "../../services/mcars.service";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-new-mcar',
  templateUrl: './new-mcar.component.html',
  styleUrls: ['./new-mcar.component.css']
})
export class NewMcarComponent implements OnInit {

  constructor(private myRouter: Router, private myCarService: McarsService) { }

  ngOnInit() {
  }


}
