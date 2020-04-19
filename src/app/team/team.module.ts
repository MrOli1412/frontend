import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamListItemComponent } from './components/team-list-item/team-list-item.component';
import { TeamPanelComponent } from './components/team-panel/team-panel.component';
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
    declarations: [TeamPageComponent, TeamListComponent, TeamListItemComponent, TeamPanelComponent],
    exports: [
        TeamListComponent
    ],
  imports: [
    TeamRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class TeamModule { }
