import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../shared/models/user";
import {AuthService} from "../../../core/services/register.service";
import {Team} from "../../../shared/models/team";
import {TeamService} from "../../services/team.service";

@Component({
  selector: 'app-team-panel',
  templateUrl: './team-panel.component.html',
  styleUrls: ['./team-panel.component.scss']
})
export class TeamPanelComponent implements OnInit {
  teamForm: FormGroup;
  team: Team;

  constructor(private fb: FormBuilder, private teamService: TeamService) {
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
    this.team={
      teamName:this.teamName.value
    }
    this.teamService.createTeam(this.team).subscribe(data => {
      console.log(data)
    }, error => {
      console.log(error);
    });
  }


  reset() {

  }
}
