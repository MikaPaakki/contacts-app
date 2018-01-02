import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactListItemComponent} from './contact/contact-list/contact-list-item/contact-list-item.component';
import {MaterialComponentsModule} from './material-components/material-components.module';
import {ContactLocalStorageService} from './contact/services/contact-local-storage-service';
import {RouterModule, Routes} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ContactDetailsComponent} from './contact/contact-details/contact-details.component';
import {FormsModule} from '@angular/forms';
import {ContactAddressPipe} from './contact/pipes/contact-address.pipe';
import {ContactService} from './contact/services/contact.service';
import {ContactHttpService} from './contact/services/contact-http.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ToolbarComponent} from './layout/toolbar/toolbar.component';
import {LoginComponent} from './user/login/login.component';
import {AppLayoutComponent} from './layout/app-layout/app-layout.component';
import {CaHttpInterceptor} from './config/ca-http-interceptor';
import {UserService} from './user/services/user.service';
import {AuthenticationService} from './user/services/authentication.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'ca',
    component: AppLayoutComponent,
    children: [
      {
        path: 'contacts',
        component: ContactListComponent
      },

      {
        path: 'contact-details/:id',
        component: ContactDetailsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDetailsComponent,
    ContactAddressPipe,
    ToolbarComponent,
    LoginComponent,
    AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    MaterialComponentsModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ContactLocalStorageService,
    ContactService,
    UserService,
    AuthenticationService,
    ContactHttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CaHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
