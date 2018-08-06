import { Component, OnInit, Input } from '@angular/core';
import {Recipie} from './Recipie';
@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
 @Input() recipie:Recipie;
   constructor() { }

  ngOnInit() {
  }

}
