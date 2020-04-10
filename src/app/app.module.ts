import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmplifyAngularModule, AmplifyService, AmplifyModules } from 'aws-amplify-angular';
import Auth from '@aws-amplify/auth';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AmplifyAngularModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: AmplifyService,
      useFactory: () => AmplifyModules({Auth})
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
