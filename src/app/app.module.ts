import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmplifyService, AmplifyAngularModule, AmplifyModules } from 'aws-amplify-angular';
import { Auth } from '@aws-amplify/auth';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AmplifyAngularModule,
    BrowserModule,
  ],
  providers: [ {
      provide: AmplifyService,
      useFactory: ()=>AmplifyModules({Auth})
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
