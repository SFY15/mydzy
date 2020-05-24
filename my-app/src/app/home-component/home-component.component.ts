import { Component, OnInit } from '@angular/core';
import { MENUS, PRODUCTS } from './data';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor() { }
  title(title: any) {
    throw new Error("Method not implemented.");
  }
  menus = MENUS;
  products = PRODUCTS;

  ngOnInit(): void {
  }

}
