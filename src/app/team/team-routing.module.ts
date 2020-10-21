import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TeamListComponent} from "./components/team-list/team-list.component";
import {TeamPageComponent} from "./pages/team-page/team-page.component";


const routes: Routes = [
  {
    path:':id',
    component:TeamPageComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule {
}
