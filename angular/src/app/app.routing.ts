import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { HistoricComponent } from './historic/index';
import { SupportComponent } from './support/index';
import { DisciplineComponent } from './discipline/index';

import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent,canActivate: [AuthGuard]},
    { path: 'historic', component: HistoricComponent ,canActivate: [AuthGuard]},
    { path: 'discipline', component: DisciplineComponent ,canActivate: [AuthGuard]},
    { path: 'support', component: SupportComponent ,canActivate: [AuthGuard]},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);