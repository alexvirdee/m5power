import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from "angular2-materialize";

// routing
import { RouterModule, Routes } from '@angular/router';

// Services
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  { path: '',  component:  SignupComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MaterializeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
