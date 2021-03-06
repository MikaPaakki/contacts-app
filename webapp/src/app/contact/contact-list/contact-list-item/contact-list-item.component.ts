import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../../services/contact';

@Component({
  selector: 'ca-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;

  constructor() {
  }

  ngOnInit() {
  }

}
