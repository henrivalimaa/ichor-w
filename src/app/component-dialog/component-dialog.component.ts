import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-component-dialog',
  templateUrl: './component-dialog.component.html',
  styleUrls: ['./component-dialog.component.css']
})
export class ComponentDialogComponent implements OnInit {
	private displayedColumns = ['id', 'date', 'versionControl'];
  private versions = [
  	{ id: '1.0.1', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
  	{ id: '1.0.2', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
  	{ id: '1.0.3', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
  	{ id: '1.0.4', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
  	{ id: '1.0.5', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
  	{ id: '2.0.1', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
  	{ id: '2.0.2', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
  ];

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
