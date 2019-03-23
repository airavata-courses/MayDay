import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  openDialog(component: any, data: any): void {
    const dialogRef = this.dialog.open(component, {
      data: data
    });

  }
}
