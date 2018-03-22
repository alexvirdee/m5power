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
import { PostService } from './services/post.service';
import { RouterGuardService } from './services/router-guard.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForumsComponent } from './components/forums/forums.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { NewMcarComponent } from './components/new-mcar/new-mcar.component';
import { DiscussionsComponent } from './components/discussions/discussions.component';
import { VideosComponent } from './components/videos/videos.component';


// image uploader
import { FileUploadModule } from "ng2-file-upload";


// pipes 
import { FilterPipe } from './pipes/filter.pipe';




const routes: Routes = [
  { path: '',  component:  SignupComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'new-mcar',  component: NewMcarComponent },
  { path: 'search', component: SearchComponent },
  { path: 'forums/:id', component: ForumsComponent },
  { path: 'forums/:id/discussions/:postId', component: DiscussionsComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'new-post/:id', component: NewPostComponent },
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
    NewPostComponent,
    NewMcarComponent,
    FilterPipe,
    DiscussionsComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MaterializeModule,
    FileUploadModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, RouterGuardService, McarsService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
