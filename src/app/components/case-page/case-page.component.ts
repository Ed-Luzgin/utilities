import { Component, Input } from '@angular/core';

@Component({
  selector: 'case-page',
  templateUrl: './case-page.component.html',
  styleUrls: ['./case-page.component.less']
})

export class CasePageComponent {
  @Input() pageTitle: string;
}
