import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-component-dialog',
  templateUrl: './component-dialog.component.html',
  styleUrls: ['./component-dialog.component.css']
})
export class ComponentDialogComponent implements OnInit {
	private displayedColumns = ['id', 'date', 'versionControl'];

  constructor(
    public dialogRef: MatDialogRef<ComponentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {}

  closeDialog(): void {
    this.dialogRef.close();
  }

}
