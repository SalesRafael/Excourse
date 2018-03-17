import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from './_guards/index';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AlertComponent } from './_directives/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { SupportComponent } from './support/support.component';
import { HistoricComponent } from './historic/historic.component';
import { DisciplineComponent } from './discipline/discipline.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        LoginComponent,
        HistoricComponent,
        SupportComponent,
        DisciplineComponent,
        HomeComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }