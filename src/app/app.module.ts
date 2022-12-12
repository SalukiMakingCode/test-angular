import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserProfilComponent } from './components/user/user-profil/user-profil.component';
import { UserSubscribeComponent } from './components/user/user-subscribe/user-subscribe.component';
import { UserConnectionComponent } from './components/user/user-connection/user-connection.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserListComponent,
    UserProfilComponent,
    UserSubscribeComponent,
    UserConnectionComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
