import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-doctor-bio',
  templateUrl: './doctor-bio.component.html',
  styleUrls: ['./doctor-bio.component.css']
})
export class DoctorBioComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DoctorBioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data);
  }
}
