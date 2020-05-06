import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { CognitoUser } from '@aws-amplify/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cognito-sample';

  user:CognitoUser;

  constructor(private amplifyService:AmplifyService) { }

  ngOnInit() {
    this.amplifyService.auth().currentAuthenticatedUser().then(
      u=>this.user = u
    ).catch(_=>console.log("not logged in"));
    this.amplifyService.authStateChange$.subscribe(
      authState=>{
        console.log("Got Auth State Change", authState);
        if (authState.state=='signedIn') {
          console.log("user",authState.user)
          this.user = authState.user
        }
      }
    )
  }

  login() {
    this.amplifyService.auth().federatedSignIn();
  }
}
