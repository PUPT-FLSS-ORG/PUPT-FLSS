import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { CommonModule } from '@angular/common';

export interface DialogData {
  title: string;
  content: string;
  actionText?: string;
  cancelText?: string;
  action?: string;
  actionTextColor?: string;
  actionBgColor?: string;
  showProgressBar?: boolean;
}

@Component({
  selector: 'app-dialog-generic',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressBarModule,
  ],
  templateUrl: './dialog-generic.component.html',
  styleUrls: ['./dialog-generic.component.scss'],
})
export class DialogGenericComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogGenericComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onActionClick(action: string | undefined): void {
    console.log('Action clicked:', action);
    this.dialogRef.close(action);
  }
}