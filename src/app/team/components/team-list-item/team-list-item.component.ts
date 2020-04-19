import {Component, Input, OnInit} from '@angular/core';
import {Team, TeamShortInfo} from "../../../shared/models/team";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {TeamService} from "../../services/team.service";
import {error} from "util";

@Component({
  selector: 'app-team-list-item',
  templateUrl: './team-list-item.component.html',
  styleUrls: ['./team-list-item.component.scss']
})
export class TeamListItemComponent implements OnInit {
  team: TeamShortInfo;

  constructor(private teamService: TeamService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.teamService.getShortInfo(this.route.snapshot.params['id']).subscribe(data => {
      console.log(data);
      this.team = data;
    }, (error => {
      console.log(error);
    }));
  }

  get teamId(){
    return this.route.snapshot.params['id'];
  }

}
