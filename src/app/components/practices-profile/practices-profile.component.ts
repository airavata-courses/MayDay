import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DoctorProfileComponent } from '../doctor-profile/doctor-profile.component';

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
  constructor(public dialogRef: MatDialogRef<DoctorProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data);
    this.pratice_center = this.data['practices'][0]['name'];

    if(this.data['practices'][0]['visit_address'] !== null && this.data['practices'][0]['visit_address'] !== undefined ){
      this.address = 'Address: '+this.data['practices'][0]['visit_address']['street'] + ',\n'+this.data['practices'][0]['visit_address']['street2']+ ',\n'+this.data['practices'][0]['visit_address']['city']+ ',\n'+this.data['practices'][0]['visit_address']['state']+ ',\n'+this.data['practices'][0]['visit_address']['zip'];
    }
    if(this.data['practices'][0]['phones'] !== null && this.data['practices'][0]['phones'] !== undefined ){
      this.phone = 'Contact: '+this.data['practices'][0]['phones'][0]['number'];
    }

    this.haswebsite = false;
    if(this.data['practices'][0]['website'] !== null && this.data['practices'][0]['website'] !== undefined){
      this.website = this.data['practices'][0]['website'];
      this.haswebsite = true;
      console.log(this.website + 'website');
    }else{
      this.website = 'N/A';
      this.haswebsite = false;
    }
    
    if(this.data['practices'][0]['email'] !== null && this.data['practices'][0]['email'] !== undefined){
      this.email = this.data['practices'][0]['email']; 
      this.hasemail = true;
    }else{
      this.email = 'N/A';
      this.hasemail = false;
    }
  }

}
