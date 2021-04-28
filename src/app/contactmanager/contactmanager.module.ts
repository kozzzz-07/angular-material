import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactmanagerRoutingModule } from './contactmanager-routing.module';



@NgModule({
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    ContactmanagerRoutingModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule
  ]
})
export class ContactmanagerModule { }
