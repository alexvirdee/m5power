import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from "angular2-materialize";

// routing
import { RouterModule, Routes } from '@angular/router';

// Services
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  { path: '',  component: LandingComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    SearchComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
