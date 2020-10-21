import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../../../shared/services/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private authService: TokenStorageService, private router: Router) {
  }

  ngOnInit() {
    console.log(this.authService.isAuthenticated());
    this.authService.isAuthenticated() ? this.router.navigate(['club']) : this.router.navigate(['login']);
  }

}
