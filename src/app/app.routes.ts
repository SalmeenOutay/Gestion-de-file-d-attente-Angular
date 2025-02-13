import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { BankComponent } from './bank/bank.component';

import { PposteComponent } from './pposte/pposte.component';
import { BaladyaComponent } from './baladya/baladya.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TicketDetailsComponent } from './ticket-detail/ticket-detail.component';
import { ProfilComponent } from './profil/profil.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {path:'pposte',component:PposteComponent},
    {path:'Bank',component:BankComponent},
    {path:'Baladya',component:BaladyaComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'ticket-details',component:TicketDetailsComponent},
    {path:'my account',component:ProfilComponent},




];
