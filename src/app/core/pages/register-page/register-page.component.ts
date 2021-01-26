import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../shared/models/user";
import {Club} from "../../../shared/models/club";
import {AuthService} from "../../services/register.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {State} from "../../../shared/models/state";
import {League} from "../../../shared/models/league";
import {PzpnTeam} from "../../../shared/models/pzpn-team";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit, OnDestroy {
  registerFormGroup: FormGroup;
  user: User;
  private stateSub: Subscription;
  states: State[] = [];
  leagues: League[] = [];
  teams: PzpnTeam[] = [];
  private getStateSub: Subscription
  private getLeaguesSub: Subscription;
  private leagueSub: Subscription;
  private getTeamSub: Subscription;

  constructor(private fb: FormBuilder, private registerService: AuthService, private toaster: ToastrService, private router: Router) {

  }

  ngOnInit() {
    this.registerFormGroup = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      secondPassword: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      clubName: ['', [Validators.required]],
      state: [{value: '', disabled: true}],
      league: [{value: '', disabled: true}],
      team: [{value: '', disabled: true}]
    });
    this.getStateSub = this.registerService.getStates().subscribe(value => {
      this.states = value;
      this.registerFormGroup.get('state').enable();
    });
    this.stateSub = this.registerFormGroup.get('state').valueChanges.subscribe(value => {
      this.getLeaguesSub = this.registerService.getLeagues(value).subscribe(value1 => {
          this.leagues = value1;
          this.teams = [];
          this.registerFormGroup.get('team').reset();
          this.registerFormGroup.get('league').enable();
        }
      )
    });
    this.leagueSub = this.registerFormGroup.get('league').valueChanges.subscribe(value => {
      this.getTeamSub = this.registerService.getTeams(value).subscribe(response => {
        this.teams = response;
        this.registerFormGroup.get('team').enable();

      });
    });


  }

  get password() {
    return this.registerFormGroup.get('password');
  }

  get secondPassword() {
    return this.registerFormGroup.get('secondPassword');
  }

  get username() {
    return this.registerFormGroup.get('username');
  }

  get email() {
    return this.registerFormGroup.get('email');
  }

  get clubName() {
    return this.registerFormGroup.get('clubName');
  }


  register() {
    this.user = {
      email: this.email.value,
      password: this.password.value,
      username: this.username.value,
      club: {
        clubName: this.clubName.value
      }
    };
    this.registerService.createAccount(this.user).subscribe(data => {
      console.log(data)
      this.toaster.success("Rejestracja wykonana pomyślnie", "Sukces");
      window.location.href = '/login'
    }, error => {
      console.log(error);
      this.toaster.error("Błąd podczas procesu rejestracji", "Błąd");

    });
  }


  reset() {
    // this.username.reset();
    // this.email.reset();
    // this.clubName.reset();
    // this.password.reset();
    // this.secondPassword.reset();
    // this.registerFormGroup.reset()
  }

  ngOnDestroy(): void {
    this.stateSub.unsubscribe();
  }
}
