import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EpisodesDetailsComponent } from './episodes-details/episodes-details.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'episodes-details/:uid', component: EpisodesDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
