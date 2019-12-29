import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoreRoutingModule} from './core-routing.module';
import {AppComponent} from "./components/app/app.component";
import {HomePageComponent} from './pages/home-page/home-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {MenuComponent} from './components/menu/menu.component';
import {FooterComponent} from './components/footer/footer.component';
import {BrowserModule} from "@angular/platform-browser";
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import { LoginPageComponent } from './pages/login-page/login-page.component';


@NgModule({
  declarations: [AppComponent, HomePageComponent, NotFoundPageComponent, MenuComponent, FooterComponent, RegisterPageComponent, LoginPageComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class CoreModule {
}
