import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { routing } from './app.routing';

import { AppComponent } from './components/app.component';
import { LoginComponent } from './components/login.component';
import { HomeComponent } from './components/home.component';

import { ifFBReadyDirective } from './directives/ifFBReady.directive';

import { FacebookService } from './shared/facebook.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,

    ifFBReadyDirective
  ],
  providers: [FacebookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
