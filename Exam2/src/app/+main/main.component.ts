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
  public signedInPhoneNumber: string;

  public confirmationCode: string;
  public phoneNumber: string = "+1";
  public confirmationResult: firebase.auth.ConfirmationResult;

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
        this.signedInPhoneNumber = user.phoneNumber;
      } else {
        this.signInStatus = false;
      }
    });


  }

  onConfirmationCodeSubmit(): void {
    this.confirmationResult.confirm(this.confirmationCode).then((result) => {
      console.log("user signed in successfully");
     }).catch((error) => {
       console.log(error);
       console.log("user could not sign in"); 
      })
  }

  onPhoneNumberSubmit(): void {
    firebase.auth().signInWithPhoneNumber(this.phoneNumber, this.recaptchaVerifier).then((confirmationResult) => {
      this.confirmationResult = confirmationResult;
      console.log("SMS sent to phone number"); 
     }).catch((error) => {
       console.log(error);
       console.log("SMS not sent!!!");
       this.recaptchaVerifier.render().then((widgetId) => {
         // doesn't work because I would need an reCAPTCHA api key, its a feature that you have to refresh
         //grecaptcha.reset(widgetId);
        })
      });
  }

  signOut(): void {
    this.afauth.auth.signOut();
    console.log("user is signed out");
  }

}
