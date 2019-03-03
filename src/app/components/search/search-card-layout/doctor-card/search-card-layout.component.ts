import { Component, OnInit, Input } from '@angular/core';
import { DialogService } from 'src/app/services/dialog-service/dialog.service';
import { DoctorProfileComponent } from 'src/app/components/doctor-profile/doctor-profile.component';
import { PracticesProfileComponent } from 'src/app/components/practices-profile/practices-profile.component';
import { ComponentType } from '@angular/core/src/render3';

@Component({
  selector: 'app-search-card-layout',
  templateUrl: './search-card-layout.component.html',
  styleUrls: ['./search-card-layout.component.css']
})
export class SearchCardLayoutComponent {

  @Input() data: any;
  constructor(public dialogService: DialogService) { }

  openDialog(type: string) {
    let component: any = null;
    switch(type) {
      case 'doctor': component = DoctorProfileComponent; break;
      case 'practice': component = PracticesProfileComponent; break;
    }
    this.dialogService.openDialog(component, this.data);
  }

}
