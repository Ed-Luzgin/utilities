import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { MainPageService } from './main-page.service'

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less'],
  providers: [MainPageService]
})

export class MainPageComponent {

  constructor( 
    private mainPageService: MainPageService,
    private router: Router
  ){
    this.mainPageService.clickCase.subscribe((linkId: string) => {
      this.router.navigate([`${linkId}`]);
    });
  }
}