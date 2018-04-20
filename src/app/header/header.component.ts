import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Header } from '../header/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit { //export so we can use this component on another module

  header: Header = {
    title: 'Traveler',
    description: 'One stop point future',
    menu: [
      {name: 'Home', route: ''},
      {name: 'Catalog', route: 'catalog'},
      {name: 'Booking', route: 'booking'},
      {name: 'About', route: 'about'}
    ]
  };

  constructor() { }//simple constructor fot this class

  ngOnInit() { //after creating the componen, exec this

  }

  showNavBar: void() {
    alert('pop it up!');
  }
}
