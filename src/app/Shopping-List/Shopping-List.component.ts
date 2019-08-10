import { Ingridients } from './../shared/ingridient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './Shopping-List.component.html',
  styleUrls: ['./Shopping-List.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingridients[] = [
    new Ingridients('Apple', 5),
    new Ingridients('Tomatoes', 10),
    new Ingridients('Potato', 4)
  ];
  constructor() { }

  ngOnInit() {
  }

}
