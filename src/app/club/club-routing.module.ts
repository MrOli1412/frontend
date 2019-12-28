import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ClubListComponent} from "./components/club-list/club-list.component";
import {ClubPageComponent} from "./pages/club-page/club-page.component";


const routes: Routes = [
  {
    path: '',
    component: ClubListComponent
  },
  {
    path: ':id',
    component: ClubPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubRoutingModule {
}
