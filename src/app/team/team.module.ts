import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamListItemComponent } from './components/team-list-item/team-list-item.component';


@NgModule({
  declarations: [TeamPageComponent, TeamListComponent, TeamListItemComponent],
  imports: [
    CommonModule,
    TeamRoutingModule
  ]
})
export class TeamModule { }
