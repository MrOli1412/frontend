import {Component, Inject, Input, OnInit} from '@angular/core';
import {Player} from "../../../shared/models/player";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
import {TransferType} from "../../../shared/models/transfer-type.enum";
import {ActivatedRoute, Route} from "@angular/router";
import {PlayerService} from "../../services/player.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {error} from "util";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

// tslint:disable-next-line:no-duplicate-imports

@Component({
  selector: 'app-player-panel',
  templateUrl: './player-panel.component.html',
  styleUrls: ['./player-panel.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class PlayerPanelComponent implements OnInit {
  requiredData: FormGroup;
  optionalData: FormGroup;
  keys: any[] = [];
  playerData: Player;
  @Input() teamId: string;


  constructor(private fb: FormBuilder,
              private playerService: PlayerService,
              public activeModal: NgbActiveModal) {

  }

  ngOnInit() {
    this.createFormControls();
    Object.keys(TransferType).forEach(key => {
      this.keys.push(
        {
          key: key,
          value: TransferType[key]
        }
      )
    });
  }

  private createFormControls() {
    this.optionalData = this.fb.group({
      amateur: ['', []],
      lastClub: ['', []],
      transferType: [TransferType.WYCHOWANEK, []],
      dressNumber: ['', []],

    })
    ;
    this.requiredData = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      evidentialNumber: ['', [Validators.required]],
      birthDay: ['', [Validators.required]],
      contractDate: ['', [Validators.required]]
    });
  }

  get firstName() {
    return this.requiredData.get('firstName');
  }

  get lastName() {
    return this.requiredData.get('lastName');
  }

  get evidentialNumber() {
    return this.requiredData.get('evidentialNumber');
  }

  get birthDay() {
    return this.requiredData.get('birthDay');
  }

  get contractDate() {
    return this.requiredData.get('contractDate');
  }

  get amateur() {
    return this.optionalData.get('amateur');
  }

  get lastClub() {
    return this.optionalData.get('lastClub');
  }

  get transferType() {
    return this.optionalData.get('transferType');
  }

  get dressNumber() {
    return this.optionalData.get('dressNumber');
  }


  submit() {
    this.playerData = Object.assign({}, this.requiredData.getRawValue(), this.optionalData.getRawValue());
    this.playerData.birthDay = _moment(this.playerData.birthDay).format('YYYY-MM-DD');
    this.playerData.contractDate = _moment(this.playerData.contractDate).format('YYYY-MM-DD');

    this.playerService.savePlayer(this.teamId, this.playerData).subscribe(data => {
      console.log(data);
      this.activeModal.close(data)
    }, error => {
      console.log(error);
    })
  }
//TODO Naprawić ostatni input oraz sprawdzić czy można rozszerzyć Modala
  reset() {

  }
}
