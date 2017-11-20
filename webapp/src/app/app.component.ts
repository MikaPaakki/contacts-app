import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ca';

  constructor(private router: Router) {

  }

  showContactList() {
    this.router.navigate(['/contacts']);
  }

  showContactService() {
    this.router.navigate(['/contact-details']);
  }
}


