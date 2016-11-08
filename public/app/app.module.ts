import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { routing } from './app.routing';

import { AppComponent } from './components/app.component';
import { LoginComponent } from './components/login.component';
import { HomeComponent } from './components/home.component';
import { WishlistComponent } from './components/wishlist.component';
import { WishlistFormComponent } from './components/wishlistForm.component';

import { ifFBReadyDirective } from './directives/ifFBReady.directive';

import { FacebookService } from './shared/facebook.service';
import { UserService } from './shared/user.service';
import { ApiService } from './shared/api.service';

@NgModule({
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    routing
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    WishlistComponent,
    WishlistFormComponent,

    ifFBReadyDirective,
  ],
  providers: [
    FacebookService,
    UserService,
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
