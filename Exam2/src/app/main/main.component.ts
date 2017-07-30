import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from "angularfire2/auth";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public signInStatus: boolean = false;
  public signedInPhoneNumber: string = "000";

  public confirmationCode: string;
  public phoneNumber: string = "+1";

  public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  
  private authStateSubscription: Subscription;

  constructor(private afauth: AngularFireAuth) {
    
  }

  ngOnInit() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.recaptchaVerifier.render();

    this.authStateSubscription = this.afauth.authState.subscribe((user: firebase.User) => {
      if (user) {
        this.signInStatus = true;
      } else {
        this.signInStatus = false;
      }
    });


  }

  onConfirmationCodeSubmit(): void {
    
  }

  onPhoneNumberSubmit(): void {
    console.log(this.phoneNumber);
  }

}
