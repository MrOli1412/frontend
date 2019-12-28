import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchRoutingModule } from './match-routing.module';
import { MatchPageComponent } from './pages/match-page/match-page.component';
import { MatchListComponent } from './components/match-list/match-list.component';
import { MatchListItemComponent } from './components/match-list-item/match-list-item.component';


@NgModule({
  declarations: [MatchPageComponent, MatchListComponent, MatchListItemComponent],
  imports: [
    CommonModule,
    MatchRoutingModule
  ]
})
export class MatchModule { }
