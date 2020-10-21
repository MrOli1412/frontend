import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffPageComponent } from './pages/staff-page/staff-page.component';
import { StaffListComponent } from './components/staff-list/staff-list.component';
import { StaffListItemComponent } from './components/staff-list-item/staff-list-item.component';
import { StaffPanelComponent } from './components/staff-panel/staff-panel.component';
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {StaffRoutingModule} from "./staff-routing.module";



@NgModule({
  declarations: [StaffPageComponent, StaffListComponent, StaffListItemComponent, StaffPanelComponent],
  imports: [
    CommonModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    StaffRoutingModule
  ]
})
export class StaffModule { }
