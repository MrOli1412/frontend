import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {NotFoundPageComponent} from "./pages/not-found-page/not-found-page.component";
import {RegisterPageComponent} from "./pages/register-page/register-page.component";


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'players',
    loadChildren: () => import('../player/player.module').then(m => m.PlayerModule)
  },
  {
    path: 'club',
    loadChildren: () => import('../club/club.module').then(m => m.ClubModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('../team/team.module').then(m => m.TeamModule)
  },
  {
    path: 'matches',
    loadChildren: () => import('../match/match.module').then(m => m.MatchModule)
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
