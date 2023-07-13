import { Component } from '@angular/core';
     
const cases = [
    {
        id: 'pipes',
        categoryId: 'base-angular',
        title: 'Pipes',
        description: 'Работа с встроенным pipes и создание собственного',
        imageURL: 'assets/img/cases/pipe.jpg'
    },
    {
        id: 'chartjs',
        categoryId: 'utilities',
        title: 'Chart.js',
        description: 'Рассматриваю основы работы с библиотекой',
        imageURL: 'assets/img/cases/chartjs.jpg'
    }       
];

@Component({
    selector: 'utilities',
    templateUrl: './utilities.component.html',
    styleUrls: ['./utilities.component.less'], 
})

export class UtilitiesComponent  {
       
    cases = cases;


}
