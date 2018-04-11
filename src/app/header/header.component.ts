import { Component, OnInit } from '@angular/core';
import { Header } from 'header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit { //export so we can use this component on another module

  header: Header = {
    title: 'Traveler - Home Page',
    menu: [
      {name: 'Home', route: ''},
      {name: 'About', route: 'about'},
    ]
  }
  constructor() {//simple constructor fot this class

  }

  ngOnInit() { //after creating the componen, exec this

  }

}
