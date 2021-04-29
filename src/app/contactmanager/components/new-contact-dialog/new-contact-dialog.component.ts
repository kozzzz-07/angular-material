import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {
  user: User = {
    id: 0,
    birthDate: new Date(),
    name: '',
    avatar: '',
    bio: '',
    notes: [],
  };

  avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4']

  constructor(private dialogRef: MatDialogRef<NewContactDialogComponent>) { }

  ngOnInit(): void {
  }

  save(): void {
    this.dialogRef.close(this.user);
  }

  dismiss(): void {
    this.dialogRef.close(null);
  }

}
