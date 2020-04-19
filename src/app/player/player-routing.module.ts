import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PlayerListComponent} from "./components/player-list/player-list.component";
import {PlayerListItemComponent} from "./components/player-list-item/player-list-item.component";
import {PlayerPageComponent} from "./pages/player-page/player-page.component";


const routes: Routes = [
  {
    path: ':teamId',
    component: PlayerListComponent
  },
  {
    path: ':teamId/:playerId',
    component: PlayerPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule {
}
