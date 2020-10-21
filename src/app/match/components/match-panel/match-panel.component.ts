import {
  AfterViewInit,
  Component,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatOption} from "@angular/material/core";
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from "@angular/material-moment-adapter";
import {Player} from "../../../shared/models/player";
import {moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {ClubPerson} from "../../../shared/models/club-person";
import {Dress} from "../../../shared/models/dress";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {StaffPosition} from "../../../shared/models/staff-position";
import {Match} from "../../../shared/models/match";
import * as moment from "moment";
import {MatchService} from "../../services/match.service";
import * as FileSaver from 'file-saver';
import {MatAutocomplete, MatAutocompleteTrigger} from "@angular/material/autocomplete";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL'
  },
  display: {
    dateInput: 'DD-MMMM-YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY'
  }
};

@Component({
  selector: 'app-match-panel',
  templateUrl: './match-panel.component.html',
  styleUrls: ['./match-panel.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class MatchPanelComponent implements OnInit, OnDestroy, AfterViewInit {
  basicData: FormGroup;
  playerForm: FormGroup;
  personForm: FormGroup;
  playerFunction: FormGroup;
  players: Player[] = [];
  filteredPlayers: Player[];
  firstSquadPlayers: Player[] = [];
  reserveSquadPlayer: Player[] = [];
  staffPeople: ClubPerson[];
  dresses: Dress[];
  teamId: string;
  isDrag = false;
  match: Match;
  @ViewChild("auto") auto: MatAutocompleteTrigger;


  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<MatchPanelComponent>,
              private matchService: MatchService,
              @Inject(MAT_DIALOG_DATA) public data) {
    this.dresses = this.staffPeople = JSON.parse(JSON.stringify(this.data.matchFormData.dress));
    this.staffPeople = JSON.parse(JSON.stringify(this.data.matchFormData.staffPersons));
    this.players = JSON.parse(JSON.stringify(this.data.matchFormData.players));
  }


  ngOnInit() {
    this.teamId = this.data.teamId;
    this.createForms();
    this.checkIfDisable();
    this.additionalFunction.valueChanges.subscribe(value => {
      console.log('in');
      this.checkIfDisable();
    });
    this.playerName.valueChanges.subscribe(data => {
      this.filteredPlayers = data ? this.filterPlayers(this.players, data) : this.players.slice();
    });

    this.matchDay.valueChanges.subscribe(value => {

      const date = new Date(value);
      console.log(date.toLocaleDateString());
    })
  }


  ngAfterViewInit(): void {

  }

  createForms() {
    this.basicData = this.fb.group({
      teamName: [localStorage.getItem('clubName'), [Validators.required]],
      matchDay: ['', [Validators.required]],
      isAway: [false, []],
      dress: ['', []]
    });
    this.playerFunction = this.fb.group({
      firstSquadGoalKeeper: ['', [Validators.required]],
      reservedSquadGoalKeeper: ['', [Validators.required]],
      captain: ['', []],
    });
    this.playerForm = this.fb.group({
      playerName: ['', []],
      firstSquad: ['', []],
      reserveSquad: ['', []],
      firstSquadPlayerNumber: ['', [Validators.min(1)]],
      reservedSquadPlayerNumber: ['', [Validators.min(1)]],
    });
    this.personForm = this.fb.group({
      coach: ['', [Validators.required]],
      secondCoach: ['', []],
      masseur: ['', []],
      medicalCarer: ['', []],
      teamManager: ['', []],
      additionalPerson: ['', []],
      additionalFunction: ['', [Validators.maxLength(10)]]
    })
  }


  checkIfDisable() {
    this.additionalFunction.value || this.additionalFunction.value !== "" ? this.additionalPerson.enable() : this.additionalPerson.disable();
  }


  drop(event) {
    if (!event.isPointerOverContainer) {
      transferArrayItem(event.previousContainer.data,
        this.players,
        event.previousIndex,
        this.players.length)
    }
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

  }

  ngOnDestroy(): void {
  }

  private filterPlayers(listToSearch: Player[], text: string): Player[] {
    const value = text.toLowerCase();
    console.log(listToSearch.filter(player => player.firstName.toLowerCase().indexOf(value) === 0 || player.lastName.toLowerCase().indexOf(value) === 0));
    return listToSearch.filter(player => player.firstName.toLowerCase().indexOf(value) === 0 || player.lastName.toLowerCase().indexOf(value) === 0);
  }


  toFirstSquad(event:Event,player: Player,trigger:MatAutocompleteTrigger) {
    event.stopPropagation();
    event.preventDefault();
    trigger.closePanel();
    this.firstSquadPlayers.push(player);
    this.players.splice(this.players.indexOf(player), 1);
    this.playerName.reset();
  }

  dragIsStart() {
    console.log('start');
    this.isDrag = true;
  }

  dragIsStop(event) {
    this.isDrag = false;
    console.log(this.firstSquad);

  }

  @HostListener('contextmenu', ['$event'])
  toReserveSquad(event, player: Player,trigger:MatAutocompleteTrigger) {
    event.stopPropagation();
    event.preventDefault();
    trigger.closePanel();
    this.reserveSquadPlayer.push(player);
    this.players.splice(this.players.indexOf(player), 1);
    this.playerName.reset();
  }

  saveMatch() {

    this.prepareDataToSave();
    this.matchService.createMatch(this.data.teamId, this.match).subscribe(value => {
      console.log(value);
    }, error => {

    });
  }

  prepareDataToSave() {
    this.match = this.playerFunction.getRawValue();
    this.match.dress = this.dress.value;
    this.match.firstSquad = this.firstSquadPlayers;
    this.match.reservedSquad = this.reserveSquadPlayer;
    this.match.teamName = this.teamName.value;
    this.match.isFinish = false;
    this.match.isAway = this.isAway.value;
    this.match.matchDate = new Date(this.matchDay.value).toLocaleTimeString();
    this.match.staffPeople = this.prepareStaffPersons();
  }


  prepareStaffPersons() {
    let staffPeople = [];
    Object.keys(this.personForm.getRawValue()).forEach(obj => {
      if (this.personForm.get(obj).value) {
        let val: ClubPerson = null;
        val = JSON.parse(JSON.stringify(this.personForm.get(obj).value));
        switch (obj) {
          case 'coach':
            val.position = StaffPosition.COACH;
            staffPeople.push(val);
            break;
          case 'secondCoach':
            console.log();
            val.position = StaffPosition.SECOND_COACH;
            staffPeople.push(val);
            break;
          case 'masseur':
            val.position = StaffPosition.MASSEUR;
            staffPeople.push(val);
            break;
          case 'medicalCarer':
            val.position = StaffPosition.MEDICAL_CARER;
            staffPeople.push(val);
            break;
          case 'teamManager':
            val.position = StaffPosition.TEAM_MANAGER;
            staffPeople.push(val);
            break;
          case 'additionalPerson':
            val.position = null;
            val.odderFunction = this.personForm.get('additionalFunction').value;
            staffPeople.push(val);
            break;
        }
        console.log(staffPeople);

      } else {

      }
    });
    return staffPeople;
  }

  createReport() {
    this.prepareDataToSave()
    this.matchService.createReport(this.data.teamId, this.match).subscribe(response => {
      const filename = response.headers.get('content-disposition').split(';')[1].split('filename')[1].split('=')[1].trim();
      FileSaver.saveAs(response.body, filename);
    })
  }

  setPlayerNumber(e: any, selectedPlayer: Player) {
    selectedPlayer.dressNumber = e.target.value;
    // this.players.find(player => player.id === selectedPlayer.id).dressNumber = 1;
  }

  getName(person) {
    if (person) {
      return `${person.lastName} ${person.firstName}`;
    }
  }

  get isAway() {
    return this.basicData.get('isAway');
  }

  get teamName() {
    return this.basicData.get('teamName');
  }

  get matchDay() {
    return this.basicData.get('matchDay')
  }

  get dress() {
    return this.basicData.get('dress');
  }


  get playerName() {
    return this.playerForm.get('playerName');
  }

  get firstSquad() {
    return this.playerForm.get('firstSquad');
  }

  get captain() {
    return this.playerFunction.get('captain');
  }

  get reservedSquadGoalKeeper() {
    return this.playerFunction.get('reservedSquadGoalKeeper');
  }

  get firstSquadGoalKeeper() {
    return this.playerFunction.get('firstSquadGoalKeeper');
  }

  get additionalPerson() {
    return this.personForm.get('additionalPerson');
  }

  get additionalFunction() {
    return this.personForm.get('additionalFunction');
  }

  get coach() {
    return this.personForm.get('coach');
  }

  get secondCoach() {
    return this.personForm.get('secondCoach');
  }

  get masseur() {
    return this.personForm.get('masseur');
  }

  get medicalCarer() {
    return this.personForm.get('medicalCarer');
  }

  get teamManager() {
    return this.personForm.get('teamManager');
  }


  dateChanged(event: MatDatepickerInputEvent<unknown, unknown>) {
    console.log(event);
  }
}
