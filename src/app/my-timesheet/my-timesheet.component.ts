import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

interface Food {
  value: string;
  viewValue: string;
}

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-my-timesheet',
  templateUrl: './my-timesheet.component.html',
  styleUrls: ['./my-timesheet.component.scss']
})
export class MyTimesheetComponent implements OnInit {
  animal = '';
  name = '';
  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogCheckTimesheet, {
      width: '400px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


@Component({
  selector: 'dialog-check-timesheet',
  templateUrl: 'dialog-check-timesheet.html',
  styleUrls: ['./dialog-check-timesheet.scss']

})
export class DialogCheckTimesheet {


  projects: Food[] = [
    {value: 'pro-0', viewValue: 'Project A'},
    {value: 'pro-1', viewValue: 'Project B'},
    {value: 'pro-2', viewValue: 'Project C'}
  ];

  tasks: Food[] = [
    {value: 'task-0', viewValue: 'Task A'},
    {value: 'task-1', viewValue: 'Task B'},
    {value: 'task-2', viewValue: 'Task C'}
  ];

  constructor(
    public dialogRef: MatDialogRef<DialogCheckTimesheet>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
