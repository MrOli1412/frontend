import {Component, Input, OnInit} from '@angular/core';
import {TokenStorageService} from "../../../shared/services/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() sidenav;
  isActive: boolean;

  constructor(private token: TokenStorageService, private router: Router) {
    this.isActive = this.token.isAuthenticated()
  }

  ngOnInit() {
  }

  logout() {
    this.token.signOut();
    window.location.href='/login'
  }
}
