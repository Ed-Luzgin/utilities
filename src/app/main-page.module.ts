import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from  '@angular/router';
import { UtilitiesComponent }   from './components/utilities/utilities.component';
import { CaseLinkComponent } from './components/case-link/case-link.component';
import { CaseCategoryComponent } from './components/case-category/case-category.component';
import { PipesCaseComponent } from './components/cases/pipes/pipes.component';
import { MainPageComponent } from './main-page.component';

const utilitiesRoutes: Routes = [
    {path: '', component: UtilitiesComponent },
    {path: 'pipes', component: PipesCaseComponent }
];

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(utilitiesRoutes) ],
    declarations: [ MainPageComponent, UtilitiesComponent, CaseLinkComponent, CaseCategoryComponent, PipesCaseComponent ],
    bootstrap:    [ MainPageComponent ]
})
export class MainPageModule {}