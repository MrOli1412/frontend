import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatchRoutingModule} from './match-routing.module';
import {MatchPageComponent} from './pages/match-page/match-page.component';
import {MatchListComponent} from './components/match-list/match-list.component';
import {MatchListItemComponent} from './components/match-list-item/match-list-item.component';
import {SharedModule} from "../shared/shared.module";
import {MatchPanelComponent} from './components/match-panel/match-panel.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {ScrollingModule} from "@angular/cdk/scrolling";


@NgModule({
  declarations: [MatchPageComponent, MatchListComponent, MatchListItemComponent, MatchPanelComponent],
  imports: [
    MatchRoutingModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  entryComponents: [MatchPanelComponent]
})
export class MatchModule {
}
