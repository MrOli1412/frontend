import {Component, OnInit, ViewChild} from '@angular/core';
import {PlayerService} from "../../services/player.service";
import {ActivatedRoute} from "@angular/router";
import {Player, PlayerShortInfo} from "../../../shared/models/player";
import {MatDialog} from "@angular/material/dialog";
import {PlayerPanelComponent} from "../player-panel/player-panel.component";
import {PlayerUploadComponent} from "../player-upload/player-upload.component";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players: PlayerShortInfo[] = [];
  tableColumns:string[] =  ['firstName','lastName','birthDay'];
  dataSource:MatTableDataSource<PlayerShortInfo>;

  constructor(private playerService: PlayerService, private route: ActivatedRoute, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getPlayers();
  }

  get getTeamId() {
    return this.route.snapshot.params['teamId'];
  }

  getPlayers() {
    this.playerService.getPlayerFromTeam(this.getTeamId).subscribe(data => {
      this.players = data;
      this.dataSource =  new MatTableDataSource(data);

      console.log()
    }, error => {
      console.log(error);
    })
  }

  addPlayer() {
    const dialogRef = this.dialog.open(PlayerPanelComponent, {
      data: {teamId: this.getTeamId}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.playerService.getPlayerFromTeam(this.getTeamId);
      }
    })
  }

  importPlayers() {
    const dialogRef = this.dialog.open(PlayerUploadComponent, {
      data: {teamId: this.getTeamId}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.playerService.getPlayerFromTeam(this.getTeamId);
      }
    })
  }
}
