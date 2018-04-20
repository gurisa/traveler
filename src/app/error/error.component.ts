import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  public page: string = "";

  constructor(
    private location: Location;
    private router: Router;
  ) { }

  ngOnInit() {
    this.page = this.router.url.replace('/', '');
  }

  goBack(): void {
    this.location.back();
  }
}
