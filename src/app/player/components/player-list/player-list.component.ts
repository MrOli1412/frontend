import {Component, OnInit, ViewChild} from '@angular/core';
import {PlayerService} from "../../services/player.service";
import {ActivatedRoute} from "@angular/router";
import {Player, PlayerShortInfo} from "../../../shared/models/player";
import {MatDialog} from "@angular/material/dialog";
import {PlayerPanelComponent} from "../player-panel/player-panel.component";
import {PlayerUploadComponent} from "../player-upload/player-upload.component";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {ToastrService} from "ngx-toastr";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players: PlayerShortInfo[] = [];
  filteredPlayers: PlayerShortInfo[];

  constructor(private playerService: PlayerService,
              private route: ActivatedRoute,
              private toaster: ToastrService,
              private modalService: NgbModal) {

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
      this.filteredPlayers = data;

      console.log()
    }, error => {
      console.log(error);
    })
  }

  addPlayer() {
    const modelRef = this.modalService.open(PlayerPanelComponent, {centered: true});
    modelRef.componentInstance.teamId = this.getTeamId;
    modelRef.result.then((result) => {
      console.log(result);
      if (result) {
        this.getPlayers();
      }
    }).catch((reason) => {
    });
  };

  importPlayers() {
    const modelRef = this.modalService.open(PlayerUploadComponent, {centered: true});
    modelRef.componentInstance.teamId = this.getTeamId;
    modelRef.result.then((result) => {
      if (result) {
        this.toaster.success('Import zawodników zakończony pomyślnie', 'Sukces');
        this.getPlayers();
      }
    }).catch((reason => {
    }));

  }


  filterPlayers(text) {
    if (text) {
      this.filteredPlayers = this.players.filter(player => player.lastName.toLowerCase().includes(text.toLowerCase())
        || player.firstName.toLowerCase().includes(text.toLowerCase())
        || player.evidentialNumber.toLowerCase().includes(text.toLowerCase())
        || player.birthDay.toLowerCase().includes(text.toLowerCase()))
    } else {
      this.filteredPlayers = this.players;
    }
  }
}
