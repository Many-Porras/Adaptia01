import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { ProjectComponent } from './components/project/project.component';
import { ClientComponent } from './components/client/client.component';
import { Page404Component } from './components/page404/page404.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'user/login', component: LoginComponent},
  { path: 'user/register', component: RegisterComponent},
  { path: 'user/profile', component: ProfileComponent}, // TODO: only user auth.
  { path: 'about', component: AboutComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'project', component: ProjectComponent},
  { path: 'client', component: ClientComponent},
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
