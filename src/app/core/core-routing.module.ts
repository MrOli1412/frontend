import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {NotFoundPageComponent} from "./pages/not-found-page/not-found-page.component";
import {RegisterPageComponent} from "./pages/register-page/register-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {AuthGuard} from "../shared/interceptors/AuthGuard";


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
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'players',
    loadChildren: () => import('../player/player.module').then(m => m.PlayerModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'club',
    loadChildren: () => import('../club/club.module').then(m => m.ClubModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'teams',
    loadChildren: () => import('../team/team.module').then(m => m.TeamModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'matches',
    loadChildren: () => import('../match/match.module').then(m => m.MatchModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'dresses',
    loadChildren: () => import('../dress/dress.module').then(m => m.DressModule)
  },
  {
    path: 'staff',
    loadChildren: () => import('../staff/staff.module').then(m => m.StaffModule)
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
