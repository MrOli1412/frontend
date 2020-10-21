import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DressPageComponent} from "./pages/dress-page/dress-page.component";
import {MatchListComponent} from "../match/components/match-list/match-list.component";
import {MatchPageComponent} from "../match/pages/match-page/match-page.component";
import {DressListComponent} from "./components/dress-list/dress-list.component";


const routes: Routes = [
  {
    path: ':teamId',
    component: DressListComponent
  },
  {
    path: ':teamId/:id',
    component: DressPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DressRoutingModule {
}
