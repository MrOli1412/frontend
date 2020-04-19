import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Match, MatchFormData} from "../../../shared/models/match";
import {MatTableDataSource} from "@angular/material/table";
import {PlayerPanelComponent} from "../../../player/components/player-panel/player-panel.component";
import {MatDialog} from "@angular/material/dialog";
import {MatchService} from "../../services/match.service";
import {Subscription} from "rxjs";
import {MatchPageComponent} from "../../pages/match-page/match-page.component";
import {MatchPanelComponent} from "../match-panel/match-panel.component";

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit, OnDestroy {
  matches: Match[];
  dataSource: MatTableDataSource<Match>;
  tableColumns: string[] = ['matchDate', 'dress', 'isFinish'];
  matchSub: Subscription;
  matchSubscription: Subscription;
  matchFormInfo: MatchFormData;

  constructor(private router: ActivatedRoute, private dialog: MatDialog, private matchService: MatchService) {
  }

  ngOnInit() {
    this.getMatches();

  }

  get getTeamId() {
    return this.router.snapshot.params['teamId'];
  }

  addMatch() {
    this.matchSubscription = this.matchService.getMatchInfo(this.getTeamId).subscribe(match => {
      this.matchFormInfo = match;
      const dialogRef = this.dialog.open(MatchPanelComponent, {
        data: {
          teamId: this.getTeamId,
          matchFormData: this.matchFormInfo
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.getMatches();
        }
      })
    }, error => {
      console.log(error)
    });


  }

  private getMatches() {
    this.matchSub = this.matchService.getMatches(this.getTeamId).subscribe(data => {
      this.matches = data;
    });
  }

  getData() {


  }

  ngOnDestroy(): void {
    this.matchSub.unsubscribe();
    this.matchSubscription.unsubscribe();

  }
}
