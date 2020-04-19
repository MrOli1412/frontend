import {Component, OnInit} from '@angular/core';
import {TeamService} from "../../services/team.service";
import {Team} from "../../../shared/models/team";
import {Router} from "@angular/router";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  teamList: Team[] = [];

  constructor(private teamService: TeamService,private router:Router) {
  }

  ngOnInit() {
    this.getTeams();
  }

   getTeams() {
    this.teamService.getAllTeams().subscribe(data => {
      console.log(data);
      this.teamList = data;
    }, error => {
      console.log(error);
      this.router.navigate(['page-not-found'], {state: error})
    });
   }

}
