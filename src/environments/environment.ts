/* Fill in the appropriate fields below
 * USER POOL ID: ID of the Cognito User Pool, ex 'us-east-1_cWLZAk0pS'
 * USER WEB CLIENT ID: ID of the configured App Client ex. '64os16d3e1fok5nl9uh3rvwm7e'
 * USER DOMAIN: Hostname of the configured Cognito domain URL ex 'aws-test.auth.us-east-1.amazonco'
*/

export const environment = {
  production: false,
  authOptions: {
    //identityPoolId: 'us-east-1:4c0a73e5-4a1b-4eb0-8004-69b88b698d3a',
    //region: 'us-east-1',
    userPoolId: '<USER POOL ID>',
    userPoolWebClientId: '<USER WEB CLIENT ID>',
    oauth: {
      domain: '<USER DOMAIN>.auth.us-east-1.amazoncognito.com',
      scope: [ 'profile', 'email' ],
      redirectSignIn: 'http://localhost:4200/',
      redirectSignOut: 'http://localhost:4200/',
      responseType: 'token'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
