import {RouterModule, Routes} from "@angular/router";
import {PlayerListComponent} from "../player/components/player-list/player-list.component";
import {PlayerPageComponent} from "../player/pages/player-page/player-page.component";
import {NgModule} from "@angular/core";
import {StaffPageComponent} from "./pages/staff-page/staff-page.component";
import {StaffListComponent} from "./components/staff-list/staff-list.component";

const routes: Routes = [
  {
    path: ':teamId',
    component: StaffListComponent
  },
  {
    path: ':teamId/:staffId',
    component: StaffPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule {
}
