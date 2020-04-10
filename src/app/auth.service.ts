import { Injectable } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signedIn:boolean;
  user: any;

  constructor(private amplifyService: AmplifyService) {
    amplifyService.authStateChange$
        .subscribe(authState => {
          this.signedIn = authState.state === 'signedIn';
          if (!authState.user) {
              this.user = null;
          } else {
              this.user = authState.user;
              console.log("user",this.user);

          }
      });
  }

  login(options?:any) {
    let opts = options || {provider: 'Amazon'}
    console.log(this.amplifyService.auth());
    this.amplifyService.auth().federatedSignIn(opts);
  }

  logout() {
    this.amplifyService.auth().signOut();
  }
}
