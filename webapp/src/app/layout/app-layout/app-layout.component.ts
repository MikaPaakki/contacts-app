import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Contact} from '../../contact/services/contact';
import {MatSidenav} from '@angular/material';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'ca-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  smallScreenQuery = '(max-width: 500px)';
  isSmallScreen: boolean;
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    this.isSmallScreen = breakpointObserver.isMatched(this.smallScreenQuery);
  }

  ngOnInit(): void {
    this.breakpointObserver.observe([
      this.smallScreenQuery
    ]).subscribe(result => {
      //this.isSmallScreen = result.matches();
      this.isSmallScreen = result.matches;
    });
  }

  navigateToContacts() {
    this.router.navigate(['/ca/contacts']);
  }

  showContactList() {
    this.router.navigate(['/ca/contacts']);
  }

  showContactService() {
    this.router.navigate(['/ca/contact-details']);
  }


  onContactSelected(contact: Contact) {
    console.log('Selected contact:');
    console.log(contact);
    this.router.navigate(['/ca/contact-details', contact.id]);
  }
  onContactCreate() {
    this.router.navigate(['/ca/contact-details', 0]);
  }

}
