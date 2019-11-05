import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { Service01Component } from './components/service/service01/service01.component';
import { Service02Component } from './components/service/service02/service02.component';
import { Service03Component } from './components/service/service03/service03.component';
import { Service04Component } from './components/service/service04/service04.component';
import { Service05Component } from './components/service/service05/service05.component';
import { ProjectComponent } from './components/project/project.component';
import { ClientComponent } from './components/client/client.component';
import { FooterComponent } from './components/footer/footer.component';
import { Page404Component } from './components/page404/page404.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'user/login', component: LoginComponent},
  { path: 'user/register', component: RegisterComponent},
  { path: 'user/profile', component: ProfileComponent}, // TODO: only user auth.
  { path: 'about', component: AboutComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'service01', component: Service01Component},
  { path: 'service02', component: Service02Component},
  { path: 'service03', component: Service03Component},
  { path: 'service04', component: Service04Component},
  { path: 'service05', component: Service05Component},
  { path: 'project', component: ProjectComponent},
  { path: 'client', component: ClientComponent},
  { path: 'footer', component: FooterComponent},
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
