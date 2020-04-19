import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PlayerRoutingModule} from './player-routing.module';
import {PlayerPageComponent} from './pages/player-page/player-page.component';
import {PlayerListComponent} from './components/player-list/player-list.component';
import {PlayerListItemComponent} from './components/player-list-item/player-list-item.component';
import {SharedModule} from "../shared/shared.module";
import {PlayerPanelComponent} from './components/player-panel/player-panel.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PlayerUploadComponent} from './components/player-upload/player-upload.component';


@NgModule({
  declarations: [PlayerPageComponent, PlayerListComponent, PlayerListItemComponent, PlayerPanelComponent, PlayerUploadComponent],
  imports: [
    PlayerRoutingModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,

  ],
  exports:[
     PlayerListComponent, PlayerListItemComponent
  ],
  entryComponents: [PlayerPanelComponent,PlayerUploadComponent],
  providers: [
  ]
})
export class PlayerModule { }
