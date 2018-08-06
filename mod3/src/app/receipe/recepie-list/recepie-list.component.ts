import { Component, OnInit } from '@angular/core';
import { Recipie } from './recepie-item/Recipie';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
  recipies:Recipie[]=[
    new Recipie("Vada pav","bun and fried paties","/assets/vadapav.jpg"),
    new Recipie("Samosa Pav","bun and fried paties","/assets/vadapav.jpg"),
    new Recipie("Vada pav","bun and fried paties","/assets/vadapav.jpg")

  ];
  constructor() { }

  ngOnInit() {
  }

}
