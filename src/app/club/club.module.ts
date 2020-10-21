import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubRoutingModule } from './club-routing.module';
import { ClubPageComponent } from './pages/club-page/club-page.component';
import { ClubListComponent } from './components/club-list/club-list.component';
import { ClubListItemComponent } from './components/club-list-item/club-list-item.component';
import {TeamModule} from "../team/team.module";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "../shared/shared.module";
import {JwtModule} from "@auth0/angular-jwt";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatBadgeModule} from "@angular/material/badge";


@NgModule({
  declarations: [ClubPageComponent, ClubListComponent, ClubListItemComponent],
  exports: [
    ClubPageComponent
  ],
    imports: [
        CommonModule,
        ClubRoutingModule,
        TeamModule,
        SharedModule,
        FontAwesomeModule,
        MatBadgeModule,


    ]
})
export class ClubModule { }
