import {Component, OnInit} from '@angular/core';
import {Contact} from '../services/contact';
import {ContactService} from '../services/contact.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ca-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact;

  constructor(private contactService: ContactService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    /*
    this.contactId = 3;
    this.contact = this.findContactById();
    */
    this.activatedRoute.paramMap.subscribe(parameters => {
      const contactId = Number(parameters.get('id'));
      console.log('contactId: ' + contactId);
      this.contact = this.findContactById(contactId);
    });
  }

  findContactById(contactId: number) {
    return this.contactService.getContactById(contactId);

  }

  editContact(contact: Contact) {

  }

  saveNewContact(contact: Contact) {

  }

  deleteContact(contact: Contact) {

  }
}
