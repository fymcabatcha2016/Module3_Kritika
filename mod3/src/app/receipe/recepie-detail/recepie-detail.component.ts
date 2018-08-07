import { Component, OnInit } from '@angular/core';
import {recipieDetails} from './recipieDetails'
@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {
  public recipie:recipieDetails;
  constructor() {
    this.recipie=new recipieDetails("/assets/vadapav.jpg","VadaPav","A burger of mumbai",["pav","aaloo","chili","chutney"]);
    console.log("recipie",this.recipie);
   }

  ngOnInit() {
  }

}
