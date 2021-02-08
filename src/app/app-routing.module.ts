import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { EpisodesDetailsComponent } from './Pages/episodes-details/episodes-details.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/explore',
    pathMatch: 'full'
  },
  {
    path: 'explore', component: HomeComponent
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
