import {Component, Input, OnInit} from '@angular/core';
import {Club} from "../../../shared/models/club";

@Component({
  selector: 'app-club-list-item',
  templateUrl: './club-list-item.component.html',
  styleUrls: ['./club-list-item.component.scss']
})
export class ClubListItemComponent implements OnInit {
  @Input() club: Club;

  constructor() { }

  ngOnInit() {
  }

}
