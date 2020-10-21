import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DressPageComponent } from './pages/dress-page/dress-page.component';
import { DressListComponent } from './components/dress-list/dress-list.component';
import { DressListItemComponent } from './components/dress-list-item/dress-list-item.component';
import { DressPanelComponent } from './components/dress-panel/dress-panel.component';
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {DressRoutingModule} from "./dress-routing.module";



@NgModule({
  declarations: [DressPageComponent, DressListComponent, DressListItemComponent, DressPanelComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    DressRoutingModule
  ]
})
export class DressModule { }
