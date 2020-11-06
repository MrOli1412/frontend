import { Component, OnInit } from '@angular/core';
import {Dress} from "../../../shared/models/dress";
import {DressService} from "../../service/dress.service";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {MatDialog} from "@angular/material/dialog";
import {DressPanelComponent} from "../dress-panel/dress-panel.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PlayerPanelComponent} from "../../../player/components/player-panel/player-panel.component";

@Component({
  selector: 'app-dress-list',
  templateUrl: './dress-list.component.html',
  styleUrls: ['./dress-list.component.scss']
})
export class DressListComponent implements OnInit {


  dress: Dress[];
  filteredDress: Dress[] = [];

  constructor(private dressService: DressService,
              private route: ActivatedRoute,
              private toaster: ToastrService,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getDress();
  }

  getDress() {
    this.dressService.getDressForTeam(this.getTeamId).subscribe(data => {
      this.dress = data;
      this.filteredDress = data;

      console.log()
    }, error => {
      console.log(error);
    })
  }

  get getTeamId() {
    return this.route.snapshot.params['teamId'];
  }

  addDress() {
    const modelRef = this.modalService.open(DressPanelComponent, {centered: true});
    modelRef.componentInstance.teamId = this.getTeamId;
    modelRef.result.then((result) => {
      console.log(result);
      if (result) {
        this.getDress();
      }
    }).catch((reason) => {
    });
  }

  filterDress(text) {
    if (text) {
      this.filteredDress = this.dress.filter(dress => JSON.stringify(dress).includes(text.toLowerCase()));
    } else {
      this.filteredDress = this.dress;
    }
  }
}
