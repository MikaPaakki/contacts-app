import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactListItemComponent} from './contact/contact-list/contact-list-item/contact-list-item.component';
import {MaterialComponentsModule} from './material-components/material-components.module';
import {ContactService} from './contact/services/contact.service';
import {RouterModule, Routes} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ContactDetailsComponent } from './contact/contact-details/contact-details.component';

const routes: Routes = [
  {
    path: '',
    component: ContactListComponent
  },

  {
    path: 'contacts',
    component: ContactListComponent
  },

  {
    path: 'contact-details',
    component: ContactDetailsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    MaterialComponentsModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
