import {Component, OnDestroy, OnInit} from '@angular/core';
import {Club} from "../../../shared/models/club";
import {ClubService} from "../../services/club.service";
import {Router} from "@angular/router";
import {faFutbol, faUser} from "@fortawesome/free-regular-svg-icons";
import {faPlus, faTshirt, faUsers} from "@fortawesome/free-solid-svg-icons";
import {PlayerPanelComponent} from "../../../player/components/player-panel/player-panel.component";
import {MatDialog} from "@angular/material/dialog";
import {Team} from "../../../shared/models/team";
import {TeamService} from "../../../team/services/team.service";
import {TeamPanelComponent} from "../../../team/components/team-panel/team-panel.component";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-club-page',
  templateUrl: './club-page.component.html',
  styleUrls: ['./club-page.component.scss']
})
export class ClubPageComponent implements OnInit {
  userIcon = faUser;
  groupIcon = faUsers;
  footballIcon = faFutbol;
  tShirtIcon = faTshirt;
  plusIcon = faPlus;
  club: Club;

  constructor(private clubService: ClubService,
              private teamService: TeamService,
              private router: Router,
              private toaster:ToastrService,
              public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.loadClub();
  }

  private loadClub() {
    this.clubService.getClub().subscribe(data => {
      console.log(data);
      this.club = data;
      localStorage.setItem('clubName', data.clubName);
    }, error => {
      console.log(error);
      this.router.navigate(['page-not-found'], {state: error})
    });
  }

  addTeam(team: Team = null) {
    const dialogRef = this.dialog.open(TeamPanelComponent, {
      data: team
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.toaster.success('Drużyna została stworzona','Sukces')
        this.loadClub();
      }
    })
  }
}
