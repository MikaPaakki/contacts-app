import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../services/contact';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'ca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];


  constructor(private contactService: ContactService) {

  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();

    // For testing purposes only

    console.log(this.contactService.getContactById(1));
  }

  onContactSelected(contact: Contact) {
    console.log('Selected contact:');
    console.log(contact);
  }

}
