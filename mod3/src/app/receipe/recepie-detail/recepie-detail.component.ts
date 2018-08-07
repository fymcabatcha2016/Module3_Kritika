import { Component, OnInit } from '@angular/core';
import {recipieDetail} from './recipieDetails'
@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {
  recipie:recipieDetail;
  constructor() { }

  ngOnInit() {
  }

}
