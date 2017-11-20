import {Component, OnInit} from '@angular/core';
import {Contact} from '../services/contact';
import {ContactService} from '../services/contact.service';
import {ActivatedRoute, Router} from '@angular/router';

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
        this.contact = this.findContactById(contactId);
      }
    });
  }

  findContactById(contactId: number) {
    return this.contactService.getContactById(contactId);

  }

  editContact() {
    this.contactService.editContact(this.contact);
    this.router.navigate(['/contacts']);
  }

  createContact() {
    console.log('Create contact clicked');
    this.contactService.createContact(this.contact);
    this.router.navigate(['/contacts']);

  }

  deleteContact() {
    this.contactService.deleteContact(this.contact.id);
    this.router.navigate(['/contacts']);
  }

  cancelAction() {
    this.router.navigate(['/contacts']);
  }
}
