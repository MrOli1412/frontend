import {Component, OnInit} from '@angular/core';
import {ClubPerson} from "../../../shared/models/club-person";
import {StaffService} from "../../service/staff.service";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {StaffPanelComponent} from "../staff-panel/staff-panel.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {StaffPosition} from "../../../shared/models/staff-position";
import {UtilService} from "../../../util/util.service";

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
                private utilService: UtilService,
                public modalService: NgbModal) {
    }

    ngOnInit(): void {

        this.getStaffPersons();
    }

   getValueFromKey(key){
    return StaffPosition[key];
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
        const modelRef = this.modalService.open(StaffPanelComponent, {centered: true, size: 'lg'});
        modelRef.componentInstance.teamId = this.getTeamId;
        modelRef.result.then((result) => {
            console.log(result);
            if (result) {
                this.getStaffPersons();
            }
        }).catch((reason) => {
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
