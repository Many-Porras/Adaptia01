import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private AuthService: AuthService, private storage: AngularFireStorage) { }
  public email: string = '';
  public password: string = '';
  ngOnInit() {
  }

  onUpload(e) {
    console.log('subir', e.target.files[0]);
  }

  onAddUser() {
    this.AuthService.registerUser(this.email, this.password)
      .then((res) => {
        this.router.navigate(['']); // TODO: verificar direccion de rutal al logear
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

  onLoginRedirect(): void {
    this.router.navigate(['']); // TODO: verificar direccion de rutal al logear
  }

}
