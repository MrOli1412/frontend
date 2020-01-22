import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../../../shared/services/token-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  info: any;
  constructor(private tokenStorage:TokenStorageService) {
  }

  ngOnInit(): void {
    this.info = {
      token: this.tokenStorage.getToken(),
      username: this.tokenStorage.getUsername()
    }
  }

}
