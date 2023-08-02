import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'case-page',
  templateUrl: './case-page.component.html',
  styleUrls: ['./case-page.component.less']
})

export class CasePageComponent implements OnInit {
  @Input() pageTitle: string;

  ngOnInit(){
    
  }

}
