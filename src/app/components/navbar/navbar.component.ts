import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mobileQuery: MediaQueryList;

  fillerNav=[
    {name:"home",route:"home",icon:"home"},
    {name:"about",route:"about",icon:"person"},
    {name:"service",route:"service",icon:"person"},
    {name:"project",route:"project",icon:"person"},
    {name:"client",route:"client",icon:"person"},
  ]

  private _mobileQueryListener: () => void;
 
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private authService: AuthService, private afsAuth: AngularFireAuth, public dialog: MatDialog) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

/* otro */
  public app_name: string = 'AdaptiaCloud';
  public isLogged: boolean = false;
  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        console.log('user logged');
        this.isLogged = true;
      } else {
        console.log('NOT user logged');
        this.isLogged = false;
      }
    });
  }

  onLogout() {
    this.afsAuth.auth.signOut();
  }

}
