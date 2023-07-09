import { Component, Input } from '@angular/core';

@Component ({
    selector: 'case-link',
    templateUrl: './case-link.component.html',
    styleUrls: ['./case-link.component.less']
})

export class CaseLinkComponent {
    @Input() id: string;
    @Input() category: string;
    @Input() imageURL: string;
    @Input() title: string;
    @Input() description: string;
}