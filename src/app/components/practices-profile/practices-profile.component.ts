import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DoctorProfileComponent } from '../doctor-profile/doctor-profile.component';

@Component({
  selector: 'app-practices-profile',
  templateUrl: './practices-profile.component.html',
  styleUrls: ['./practices-profile.component.css']
})
export class PracticesProfileComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DoctorProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    // roja you will get the data here
    console.log(this.data);
  }

}
