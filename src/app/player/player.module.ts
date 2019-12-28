import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerPageComponent } from './pages/player-page/player-page.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerListItemComponent } from './components/player-list-item/player-list-item.component';


@NgModule({
  declarations: [PlayerPageComponent, PlayerListComponent, PlayerListItemComponent],
  imports: [
    CommonModule,
    PlayerRoutingModule
  ],
  exports:[
     PlayerListComponent, PlayerListItemComponent
  ]
})
export class PlayerModule { }
