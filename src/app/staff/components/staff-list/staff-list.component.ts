import {Component, OnInit} from '@angular/core';
import {ClubPerson} from "../../../shared/models/club-person";
import {StaffService} from "../../service/staff.service";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {MatDialog} from "@angular/material/dialog";
import {StaffPanelComponent} from "../staff-panel/staff-panel.component";

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {
  staffPersons: ClubPerson[];
  filteredStaff: ClubPerson[] = [];

  constructor(private staffService: StaffService,
              private route: ActivatedRoute,
              private toaster: ToastrService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getStaffPersons();
  }

  getStaffPersons() {
    this.staffService.getStaffForTeam(this.getTeamId).subscribe(data => {
      this.staffPersons = data;
      this.filteredStaff = data;

      console.log()
    }, error => {
      console.log(error);
    })
  }

  get getTeamId() {
    return this.route.snapshot.params['teamId'];
  }

  addStaffPerson() {
    const dialogRef = this.dialog.open(StaffPanelComponent,
    {
      data:{
        teamId:this.getTeamId
      }
    }
    );
    dialogRef.afterClosed().subscribe(value => {

    });
  }

  addAdditionalTeam() {

  }

  filterStaff(text) {
    if (text) {
      this.filteredStaff = this.staffPersons.filter(player => JSON.stringify(player).includes(text.toLowerCase()));
    } else {
      this.filteredStaff = this.staffPersons;
    }
  }
}
