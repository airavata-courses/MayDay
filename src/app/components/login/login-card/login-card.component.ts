import { Component, OnInit } from '@angular/core';

import { EmailValidatorService } from 'src/app/services/email-validator/email-validator.service';
import { GoogleEventsService } from 'src/app/services/google-events/google-events.service';


@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {



  hide = true;

  constructor(public emailValidator: EmailValidatorService, public googleSignin: GoogleEventsService) {

  }

  ngOnInit() {
  }

}
