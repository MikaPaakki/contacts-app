import {Component, OnInit} from '@angular/core';
import {Contact} from '../services/contact';
import {ContactLocalStorageService} from '../services/contact-local-storage-service';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'ca-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact;
  public action: string;

  constructor(private contactService: ContactService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.action = '';
  }

  ngOnInit() {
    /*
    this.contactId = 3;
    this.contact = this.findContactById();
    */
    this.activatedRoute.paramMap.subscribe(parameters => {
      const contactId = Number(parameters.get('id'));
      console.log('contactId: ' + contactId);
      if (contactId === 0) {
        this.action = 'Create contact';
        this.contact = new Contact();
      } else {
        this.action = 'Edit contact';
        // this.contact = this.findContactById(contactId);
        this.contact = new Contact();
        this.contactService.findContactsById(contactId).subscribe(contact => {
          this.contact = contact;
        });
      }
    });
  }

  /*
  findContactById(contactId: number) {
    return this.contactService.getContactById(contactId);

  }
  */

  editContact() {
    this.contactService.editContact(this.contact).subscribe(() => {
      this.router.navigate(['/ca/contacts']);
    });
  }

  createContact() {
    console.log('Create contact clicked');
    this.contactService.createContact(this.contact).subscribe(() => {
      this.router.navigate(['/ca/contacts']);
    });

  }

  deleteContact() {
    this.contactService.deleteContact(this.contact.id).subscribe(() => {
      this.router.navigate(['/ca/contacts']);
    });

  }

  cancelAction() {
    this.router.navigate(['/ca/contacts']);
  }
}
