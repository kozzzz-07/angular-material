import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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

  name = new FormControl('', [Validators.required]);

  getErrorMessage(): '' | 'You must enter a name' {
    return this.name.hasError('required') ? 'You must enter a name' : '';
  }

  ngOnInit(): void {
  }

  save(): void {
    this.user.name = this.name.value;
    this.dialogRef.close(this.user);
  }

  dismiss(): void {
    this.dialogRef.close(null);
  }

}
