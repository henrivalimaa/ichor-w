import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent, ComponentDialog } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { UserService } from './user.service';
import { ComponentDialogComponent } from './component-dialog/component-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ComponentDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatDialogModule,
    MatMenuModule,
    AngularFontAwesomeModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [ComponentDialogComponent]
})
export class AppModule { }
