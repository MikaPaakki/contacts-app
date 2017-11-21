import {Injectable} from '@angular/core';
import {ContactLocalStorageService} from './contact-local-storage-service';
import {Contact} from './contact';
import {ContactHttpService} from './contact-http.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ContactService {

  constructor(private localStorage: ContactLocalStorageService, private contactHttpService: ContactHttpService){

  }

  findContacts(): Observable<Contact[]> {
    // return this.localStorage.findContacts();
    this.contactHttpService.get();
    return this.contactHttpService.get();
  }

  findContactsById(id: number) {
    return this.localStorage.getContactById(id);
  }

  saveContact(contact: Contact) {
    return this.localStorage.saveContact(contact);
  }

  editContact(contact: Contact) {
    return this.localStorage.editContact(contact);
  }

  deleteContact(id: number) {
    return this.localStorage.deleteContact(id);
  }

  createContact(contact: Contact) {
    return this.localStorage.createContact(contact);
  }
}
