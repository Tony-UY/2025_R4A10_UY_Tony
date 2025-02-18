import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {Page404Component} from "./page404/page404.component";
import {DetailvoyageComponent} from "./detailvoyage/detailvoyage.component";
import {GenVoyageComponent} from "./gen-voyage/gen-voyage.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: 'gen',
    component: GenVoyageComponent,
  },
  {
    path: 'detail/:id',
    component: DetailvoyageComponent,
  },
  {
    path: '404',
    component: Page404Component,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
