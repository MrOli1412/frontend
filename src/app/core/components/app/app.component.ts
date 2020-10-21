import {Component, OnInit, ViewChild} from '@angular/core';
import {TokenStorageService} from "../../../shared/services/token-storage.service";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  info: any;
  isAuthenticated: boolean = false;
  @ViewChild("sidenav") sidenav: MatSidenav;
  selectedAction: string = 'login';

  constructor(private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    this.info = {
      token: this.tokenStorage.getToken(),
      username: this.tokenStorage.getUsername()
    };
    this.isAuthenticated = this.tokenStorage.isAuthenticated();
  }


  selectAction(action: any) {
    this.selectedAction = action;
  }
}
