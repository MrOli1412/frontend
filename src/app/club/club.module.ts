import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubRoutingModule } from './club-routing.module';
import { ClubPageComponent } from './pages/club-page/club-page.component';
import { ClubListComponent } from './components/club-list/club-list.component';
import { ClubListItemComponent } from './components/club-list-item/club-list-item.component';


@NgModule({
  declarations: [ClubPageComponent, ClubListComponent, ClubListItemComponent],
  imports: [
    CommonModule,
    ClubRoutingModule
  ]
})
export class ClubModule { }
