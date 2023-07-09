import { Component } from '@angular/core';
import { MainPageService } from 'src/app/main-page.service';
     
const cases = [
    {
        id: 'pipes',
        categoryId: 'base-angular',
        title: 'Pipes',
        description: 'Работа с встроенным pipes и создание собственного',
        imageURL: 'assets/img/cases/pipe.jpg'
    }    
];

@Component({
    selector: 'utilities',
    templateUrl: './utilities.component.html',
    styleUrls: ['./utilities.component.less'], 
})

export class UtilitiesComponent  {
       
    cases = cases;

    constructor( private mainPageService: MainPageService ){}

    caseClick(linkId) {
        console.log(linkId);
        this.mainPageService.onClickCase(linkId);
        this.mainPageService.clickCase.emit(linkId);
    }
}
