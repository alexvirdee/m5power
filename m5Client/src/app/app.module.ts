import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from "angular2-materialize";

// routing
import { RouterModule, Routes } from '@angular/router';

// Services
import { AuthService } from './services/auth.service';
import { McarsService } from './services/mcars.service';
import { RouterGuardService } from './services/router-guard.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForumsComponent } from './components/forums/forums.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NewPostComponent } from './components/new-post/new-post.component';

// image uploader
import { FileUploadModule } from "ng2-file-upload";


const routes: Routes = [
  { path: '',  component:  SignupComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'search', component: SearchComponent },
  { path: 'forums', component: ForumsComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    LoginComponent,
    SignupComponent,
    ForumsComponent,
    LogoutComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MaterializeModule,
    FileUploadModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, RouterGuardService, McarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
