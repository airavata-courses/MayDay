import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-doctor-bio',
  templateUrl: './doctor-bio.component.html',
  styleUrls: ['./doctor-bio.component.css']
})
export class DoctorBioComponent implements OnInit {
  specialties: any;
  ratings:any;
  ratings_stars: any;
  israted: boolean;
   
  constructor(public dialogRef: MatDialogRef<DoctorBioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data);
    this.specialties = this.data['specialties'][0];
    this.ratings = '';
    this.israted = false;
    if(this.data['ratings'][0] !== null && this.data['ratings'][0] !== undefined ){
      this.ratings_stars = this.data['ratings'][0]['image_url_small'];
      this.ratings =  'Ratings : '+ this.data['ratings'][0]['rating'];
      this.israted = true;
    }
    
 
  }
}
