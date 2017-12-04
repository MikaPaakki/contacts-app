import {Injectable} from '@angular/core';
import {ContactLocalStorageService} from './contact-local-storage-service';
import {Contact} from './contact';
import {ContactHttpService} from './contact-http.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ContactService {

  constructor(private localStorage: ContactLocalStorageService, private contactHttpService: ContactHttpService) {

  }

  findContacts(): Observable<Contact[]> {
    // return this.localStorage.findContacts();
    // this.contactHttpService.get();
    return this.contactHttpService.get();
  }

  findContactsById(id: number): Observable<Contact> {
    // return this.localStorage.getContactById(id);
    return this.contactHttpService.getById(id);
  }

  /*saveContact(contact: Contact) {
    return this.contactHttpService.saveContact(contact);
  }*/

  editContact(contact: Contact) {
    return this.contactHttpService.edit(contact);
  }

  deleteContact(id: number) {
    return this.contactHttpService.delete(id);
    //return this.localStorage.deleteContact(id);
  }

  createContact(contact: Contact) {
    return this.contactHttpService.create(contact);
  }
}
