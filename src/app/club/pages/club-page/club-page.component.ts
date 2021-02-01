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
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

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
  private closeResult: string;

  constructor(private clubService: ClubService,
              private teamService: TeamService,
              private router: Router,
              private toaster: ToastrService,
              private modalService: NgbModal) {

  }

  ngOnInit(): void {
    this.loadClub();
  }

  private loadClub() {
    this.clubService.getClub().subscribe(data => {
      this.club = data;
      localStorage.setItem('clubName', data.clubName);
    }, error => {
      console.log(error);
      this.router.navigate(['page-not-found'], {state: error})
    });
  }

  addTeam(team: Team = null) {
    this.modalService.open(TeamPanelComponent, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true
    }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.toaster.success('Drużyna została stworzona', 'Sukces')
      this.loadClub();
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    // const dialogRef = this.dialog.open(TeamPanelComponent, {
    //   data: team
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.toaster.success('Drużyna została stworzona','Sukces')
    //     this.loadClub();
    //   }
    // })
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  generateTeams() {
    this.teamService.generateTeams().subscribe(value => {

    })
  }
}
