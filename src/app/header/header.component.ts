import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Header } from '../header/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit { //export so we can use this component on another module

  header = {
    title: 'Traveler',
    description: 'One stop point future',
  };

  constructor() { }//simple constructor fot this class

  ngOnInit() { //after creating the componen, exec this

  }

  public showNavBar() :void {
    alert('pop it up!');
  }
}
