import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoreRoutingModule} from './core-routing.module';
import {AppComponent} from "./components/app/app.component";
import {HomePageComponent} from './pages/home-page/home-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {MenuComponent} from './components/menu/menu.component';
import {FooterComponent} from './components/footer/footer.component';
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [AppComponent, HomePageComponent, NotFoundPageComponent, MenuComponent, FooterComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class CoreModule {
}
