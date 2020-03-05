import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdspaceComponent } from './adspace/adspace.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { EventDetailsComponent } from './event-details/event-details.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// importing prime ng carousel module 
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
//google mao using agm package
import { AgmCoreModule } from '@agm/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { HeaderAfterLoginComponent } from './header-after-login/header-after-login.component';
import { GroupsComponent } from './groups/groups.component';
import { LinkedAccountsComponent } from './linked-accounts/linked-accounts.component';
import { InvitesComponent } from './invites/invites.component';
import { OrdersComponent } from './orders/orders.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdspaceComponent,
    ContainerComponent,
    FooterComponent,
    EventDetailsComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    OrderhistoryComponent,
    HeaderAfterLoginComponent,
    GroupsComponent,
    LinkedAccountsComponent,
    InvitesComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
	RouterModule,
	BrowserAnimationsModule,
	RouterModule.forRoot([
	  { path: '', component: ContainerComponent },
	  { path: 'event-details', component: EventDetailsComponent},
	  { path: 'orderhistory', component: OrderhistoryComponent},
	  { path: 'groups', component: GroupsComponent},
	  { path: 'linked-accounts', component: LinkedAccountsComponent},
	  { path: 'invites', component: InvitesComponent},
	  { path: 'orders', component: OrdersComponent},
	]),
	MDBBootstrapModule.forRoot(),
	AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBoYskZR1h8e6fNdiKqbUIW8fLyM5WMQ6o'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
