import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onClickMenu(): void {
    this.toggleSidenav.emit();
  }

}
