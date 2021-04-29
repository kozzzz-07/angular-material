import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClickMenu(): void {
    this.toggleSidenav.emit();
  }

  openAddContactDialog(): void {
    this.dialog.open(NewContactDialogComponent, {
      width: '450px'
    });
  }

}
