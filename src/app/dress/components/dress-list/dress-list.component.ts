import { Component, OnInit } from '@angular/core';
import {Dress} from "../../../shared/models/dress";
import {DressService} from "../../service/dress.service";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {MatDialog} from "@angular/material/dialog";
import {DressPanelComponent} from "../dress-panel/dress-panel.component";

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
              public dialog: MatDialog) {
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
    const dialogRef = this.dialog.open(DressPanelComponent,
      {
        data:{
          teamId:this.getTeamId
        }
      }
    );
    dialogRef.afterClosed().subscribe(value => {

    });
  }

  filterDress(text) {
    if (text) {
      this.filteredDress = this.dress.filter(player => JSON.stringify(player).includes(text.toLowerCase()));
    } else {
      this.filteredDress = this.dress;
    }
  }
}
