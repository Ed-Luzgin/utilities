import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less'],
})

export class MainPageComponent {

  constructor( private router: Router ){}
}