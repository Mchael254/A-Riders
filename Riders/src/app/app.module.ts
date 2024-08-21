import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LandingComponent } from './landing/landing.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RidersComponent } from './riders/riders.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LandingComponent,
    CalendarComponent,
    RidersComponent,
    PagenotfoundComponent,
    PasswordresetComponent,
    SigninComponent,
    SignupComponent,
    AboutComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
