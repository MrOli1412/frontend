import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../shared/models/user";
import {AuthService} from "../../../core/services/register.service";
import {Team} from "../../../shared/models/team";
import {TeamService} from "../../services/team.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-team-panel',
  templateUrl: './team-panel.component.html',
  styleUrls: ['./team-panel.component.scss']
})
export class TeamPanelComponent implements OnInit {
  teamForm: FormGroup;
  team: Team;

  constructor(private fb: FormBuilder,
              private teamService: TeamService,
              private toaster:ToastrService,
              public dialogRef: MatDialogRef<TeamPanelComponent>,
              @Inject(MAT_DIALOG_DATA) public data) {
  }

  ngOnInit() {
    this.teamForm = this.fb.group({
      teamName: ['', [Validators.required]]
    });
  }

  get teamName() {
    return this.teamForm.get('teamName');
  }


  register() {
    this.team = {
      teamName: this.teamName.value
    };
    this.teamService.createTeam(this.team).subscribe(data => {
      this.dialogRef.close(data);
    }, error => {
      this.toaster.error("Błąd podczas tworzenia drużyny","Błąd");
    });
  }


  reset() {
    this.dialogRef.close();
  }
}
