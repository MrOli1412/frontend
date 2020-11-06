import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PlayerService} from "../../../player/services/player.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {StaffService} from "../../service/staff.service";
import {TransferType} from "../../../shared/models/transfer-type.enum";
import {StaffPosition} from "../../../shared/models/staff-position";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-staff-panel',
  templateUrl: './staff-panel.component.html',
  styleUrls: ['./staff-panel.component.scss']
})
export class StaffPanelComponent implements OnInit {
  staffForm: FormGroup;
  positions = [];
  @Input() teamId: string;


  constructor(private fb: FormBuilder,
              private staffService: StaffService,
              public activeModal: NgbActiveModal
            ) {
  }

  ngOnInit(): void {

    this.createForm();
    Object.keys(StaffPosition).forEach(key => {
      this.positions.push(
        {
          key: key,
          value: StaffPosition[key]
        }
      )
    });
  }

  private createForm() {
    this.staffForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      licenseNumber: [''],
      position: ['', [Validators.required]],
      odderFunction: [''],
    })

  }

  submit() {
    this.staffService.saveStaffPerson(this.teamId, this.staffForm.getRawValue()).subscribe((value) => {
        this.activeModal.close(value);
      }, error => {

      }
    )
  }
}
