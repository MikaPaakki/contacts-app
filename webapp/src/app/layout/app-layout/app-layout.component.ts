import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ca-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent {

  constructor(private router: Router) {

  }

  showContactList() {
    this.router.navigate(['/contacts']);
  }

  showContactService() {
    this.router.navigate(['/contact-details']);
  }

}
