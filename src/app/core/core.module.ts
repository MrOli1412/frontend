import {ErrorHandler, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoreRoutingModule} from './core-routing.module';
import {AppComponent} from "./components/app/app.component";
import {HomePageComponent} from './pages/home-page/home-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {MenuComponent} from './components/menu/menu.component';
import {FooterComponent} from './components/footer/footer.component';
import {BrowserModule} from "@angular/platform-browser";
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ClubModule} from "../club/club.module";
import {JWT_OPTIONS, JwtHelperService, JwtModule} from "@auth0/angular-jwt";
import {httpInterceptorProviders} from "../shared/interceptors/auth-interceptor";
import {AuthGuard} from "../shared/interceptors/AuthGuard";
import {MAT_DATE_LOCALE} from "@angular/material/core";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import {GlobalHttpInterceptorService} from "../shared/interceptors/GlobalHttpInterceptorService";
import {GlobalErrorHandlerService} from "../shared/interceptors/global-error-handler.service";
import {ToastrModule} from "ngx-toastr";


@NgModule({
  declarations: [AppComponent, HomePageComponent, NotFoundPageComponent, MenuComponent, FooterComponent, RegisterPageComponent, LoginPageComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    HttpClientModule,
    ClubModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    JwtModule,
    ToastrModule.forRoot()

  ],
  providers: [JwtHelperService, [httpInterceptorProviders],
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    AuthGuard,
    {provide: MAT_DATE_LOCALE, useValue: 'pl-PL'},
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}},
    {provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true},
    {provide: ErrorHandler, useClass: GlobalErrorHandlerService}
  ],
  bootstrap: [AppComponent]
})
export class CoreModule {
}
