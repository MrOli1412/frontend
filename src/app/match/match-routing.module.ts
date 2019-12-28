import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MatchListComponent} from "./components/match-list/match-list.component";
import {MatchPageComponent} from "./pages/match-page/match-page.component";


const routes: Routes = [
  {
    path: '',
    component: MatchListComponent
  },
  {
    path: ':id',
    component: MatchPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule {
}
