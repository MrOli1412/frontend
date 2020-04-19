import {Component, Input, OnInit} from '@angular/core';
import {Player, PlayerShortInfo} from "../../../shared/models/player";

@Component({
  selector: 'app-player-list-item',
  templateUrl: './player-list-item.component.html',
  styleUrls: ['./player-list-item.component.scss']
})
export class PlayerListItemComponent implements OnInit {
  @Input() player: PlayerShortInfo;

  constructor() {
  }

  ngOnInit() {
  }

}
