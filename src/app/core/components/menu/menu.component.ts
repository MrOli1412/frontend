import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TokenStorageService} from "../../../shared/services/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isActive: boolean;
  @Output() actionEmitter = new EventEmitter();

  constructor(private token: TokenStorageService, private router: Router) {
    this.isActive = this.token.isAuthenticated()
  }

  ngOnInit() {
  }

  logout() {
    this.token.signOut();
    window.location.href = '/login'
  }



  callAction(name: string) {
    this.actionEmitter.emit(name);
  }
}
