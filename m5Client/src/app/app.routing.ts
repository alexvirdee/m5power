import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';


export const router: Routes = [
	{ path: '', redirectTo: 'signup', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent }
];
