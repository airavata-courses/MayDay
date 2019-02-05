import { Component, OnInit } from '@angular/core';
import { EmailValidatorService } from 'src/app/services/email-validator/email-validator.service';
import { GoogleEventsService } from 'src/app/services/google-events/google-events.service';

@Component({
  selector: 'app-signup-card',
  templateUrl: './signup-card.component.html',
  styleUrls: ['./signup-card.component.css']
})
export class SignupCardComponent implements OnInit {

  hide = true;
  constructor(public emailValidator: EmailValidatorService, public googleSignup: GoogleEventsService) { }

  ngOnInit() {
  }

}
