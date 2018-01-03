import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../services/contact';
import {ContactLocalStorageService} from '../services/contact-local-storage-service';
import {Router} from '@angular/router';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'ca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];


  constructor(private contactService: ContactService, private router: Router) {

  }

  ngOnInit() {
    //this.contacts = this.contactService.findContacts();

    this.contactService.findContacts().subscribe((contacts: Contact[]) => {
      this.contacts = contacts;
    });

    // For testing purposes only

    // console.log(this.contactService.getContactById(1));
  }

  onContactSelected(contact: Contact) {
    console.log('Selected contact:');
    console.log(contact);
    this.router.navigate(['/ca/contact-details', contact.id]);
  }
  onContactCreate() {
    this.router.navigate(['/ca/contact-details', 0]);
  }
  openSidenav() {
    this.router.navigate(['/ca/contacts']);
  }
}
