import { NgModule } from '@angular/core';
import {MatBadgeModule,MatDividerModule,MatProgressSpinnerModule,MatNativeDateModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule,} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
@NgModule({
imports: [MatBadgeModule,MatProgressSpinnerModule,MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule,FormsModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,],
 
exports: [MatBadgeModule,MatProgressSpinnerModule,MatNativeDateModule,FormsModule,
MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,],
 
})
 
export  class  MyMaterialModule { } 