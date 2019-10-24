import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private AuthService: AuthService) { }
  public email: string = '';
  public password: string = '';

  ngOnInit() {
  }

  onLogin():void {
    this.AuthService.loginEmailUser(this.email, this.password)
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }

  onLoginGoogle(): void {
    this.AuthService.loginGoogleUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }

  onLoginFacebook(): void {
    this.AuthService.loginFacebookUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }

  onLogout() {
    this.AuthService.logoutUser();
  }

  onLoginRedirect(): void {
    this.router.navigate(['']); // TODO: verificar direccion de rutal al logear
  }
}
