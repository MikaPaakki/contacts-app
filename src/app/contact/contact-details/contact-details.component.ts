import { Component, OnInit } from '@angular/core';
import {Contact} from '../services/contact';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'ca-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contactId: number;
  contact: Contact;

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.contactId = 3;
    this.contact = this.findContactById();

  }

  findContactById() {
    return this.contactService.getContactById(this.contactId);

  }
}
