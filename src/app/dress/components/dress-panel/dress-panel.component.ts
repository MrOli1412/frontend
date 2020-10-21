import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StaffService} from "../../../staff/service/staff.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {StaffPosition} from "../../../shared/models/staff-position";
import {DressService} from "../../service/dress.service";

@Component({
  selector: 'app-dress-panel',
  templateUrl: './dress-panel.component.html',
  styleUrls: ['./dress-panel.component.scss']
})
export class DressPanelComponent implements OnInit {

  dressForm: FormGroup;
  teamId;

  constructor(private fb: FormBuilder,
              private dressService: DressService,
              public dialogRef: MatDialogRef<DressPanelComponent>,
              @Inject(MAT_DIALOG_DATA) public data) {
  }

  ngOnInit(): void {
    this.teamId = this.data.teamId;

    this.createForm();
  }

  private createForm() {
    this.dressForm = this.fb.group({
      color: ['', [Validators.required]],
    })

  }

  submit() {
    this.dressService.saveDress(this.teamId, this.dressForm.getRawValue()).subscribe((value) => {
        this.dialogRef.close(value);
      }, error => {

      }
    )
  }
}
