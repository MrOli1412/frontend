import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "./material/material.module";
import {RouterModule} from "@angular/router";
import {JWT_OPTIONS, JwtHelperService, JwtModule} from "@auth0/angular-jwt";
import {AuthService} from "../core/services/register.service";
import {AuthGuard} from "./interceptors/AuthGuard";
import {httpInterceptorProviders} from "./interceptors/auth-interceptor";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    JwtModule,
    RouterModule
  ],
  exports: [MaterialModule
  ],
  providers: [
    [httpInterceptorProviders],
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService,
    AuthGuard
  ]
})
export class SharedModule {
}
