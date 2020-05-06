// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authOptions: {
    //identityPoolId: 'us-east-1:4c0a73e5-4a1b-4eb0-8004-69b88b698d3a',
    //region: 'us-east-1',
    userPoolId: 'us-east-1_cWLZAk0pW',
    userPoolWebClientId: '64os16d3e1fok5nl9uh3rvvm7e',
    oauth: {
      domain: 'brehmcla-aam-demo.auth.us-east-1.amazoncognito.com',
      scope: [ 'profile', 'email' ],
      redirectSignIn: 'http://localhost:4200/',
      redirectSignOut: 'http://localhost:4200/',
      responseType: 'code'
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
