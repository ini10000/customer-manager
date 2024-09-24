import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICustomer } from '../interfaces/customer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent implements OnInit {
  pathname!: string;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICustomer,
    private route: ActivatedRoute,

  ) {
  }

  ngOnInit(): void {
    this.pathname = this.route.snapshot.url[0]?.path ?? '';
  }



  onNoClick(): void {
    this.dialogRef.close();
  }
}
