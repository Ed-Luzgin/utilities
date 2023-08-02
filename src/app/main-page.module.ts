import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from  '@angular/router';
import { UtilitiesComponent }   from './components/utilities/utilities.component';
import { CaseLinkComponent } from './components/case-link/case-link.component';
import { CaseCategoryComponent } from './components/case-category/case-category.component';
import { PipesCaseComponent } from './components/cases/pipes/pipes.component';
import { ChartJsCaseComponent } from './components/cases/chartjs/chartjs.component';
import { MainPageComponent } from './main-page.component';
import { CasePageComponent } from './components/case-page/case-page.component';
import { AlgorithmComponent } from './components/cases/algorithm/algorithm.component';

const utilitiesRoutes: Routes = [
    {path: '', component: UtilitiesComponent },
    {path: 'pipes', component: PipesCaseComponent },
    {path: 'chartjs', component: ChartJsCaseComponent }
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(utilitiesRoutes) ],
    declarations: [ MainPageComponent, UtilitiesComponent, CaseLinkComponent, CaseCategoryComponent, PipesCaseComponent, CasePageComponent, ChartJsCaseComponent, AlgorithmComponent ],
    bootstrap:    [ MainPageComponent ]
})
export class MainPageModule {}