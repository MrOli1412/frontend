import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DressPageComponent} from "./pages/dress-page/dress-page.component";


const routes: Routes = [

  {
    path: '',
    component: DressPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubRoutingModule {
}
