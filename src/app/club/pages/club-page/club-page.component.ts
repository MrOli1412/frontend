import {Component, OnDestroy, OnInit} from '@angular/core';
import {Club} from "../../../shared/models/club";
import {ClubService} from "../../services/club.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-club-page',
  templateUrl: './club-page.component.html',
  styleUrls: ['./club-page.component.scss']
})
export class ClubPageComponent implements OnInit {
  private club: Club;

  constructor(private clubService: ClubService, private router: Router) {
  }

  ngOnInit() {
    this.loadClub();
  }

  private loadClub() {
    this.clubService.getClub().subscribe(data => {
      this.club = data;
    }, error => {
      console.log(error);
      this.router.navigate(['page-not-found'], {state: error})
    });
  }
}
