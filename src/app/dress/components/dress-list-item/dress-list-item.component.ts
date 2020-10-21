import {Component, OnInit} from '@angular/core';
import {ClubPerson} from "../../../shared/models/club-person";
import {StaffService} from "../../../staff/service/staff.service";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {MatDialog} from "@angular/material/dialog";
import {StaffPanelComponent} from "../../../staff/components/staff-panel/staff-panel.component";
import {DressService} from "../../service/dress.service";
import {DressPanelComponent} from "../dress-panel/dress-panel.component";
import {Dress} from "../../../shared/models/dress";

@Component({
  selector: 'app-dress-list-item',
  templateUrl: './dress-list-item.component.html',
  styleUrls: ['./dress-list-item.component.scss']
})
export class DressListItemComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}
