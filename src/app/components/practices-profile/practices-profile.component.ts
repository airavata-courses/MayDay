import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DoctorProfileComponent } from '../doctor-profile/doctor-profile.component';
import { uniqBy } from 'lodash';

@Component({
  selector: 'app-practices-profile',
  templateUrl: './practices-profile.component.html',
  styleUrls: ['./practices-profile.component.css']
})
export class PracticesProfileComponent implements OnInit {

  pratice_center: any;
  address: any;
  phone: any;
  website: any;
  haswebsite: boolean;
  email: any;
  hasemail: boolean;
  cleanData: any;
  constructor(public dialogRef: MatDialogRef<DoctorProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.cleanData = uniqBy(this.data.practices, 'visit_address.street');

  }

}
