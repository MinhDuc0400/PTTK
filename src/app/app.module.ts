import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideRightBarComponent } from './layout/side-right-bar/side-right-bar.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { DialogCheckTimesheet, MyTimesheetComponent } from './my-timesheet/my-timesheet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatNativeDateModule, MatOptionModule, MatOptionSelectionChange } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';
import { WorkingCalanderComponent } from './working-calander/working-calander.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

export function momentAdapterFactory() {
  return adapterFactory(moment);
}


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideRightBarComponent,
    MyTimesheetComponent,
    DialogCheckTimesheet,
    WorkingCalanderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatDialogModule,
    // MatOptionSelectionChange,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatOptionModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FlatpickrModule.forRoot(),
    CalendarModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory }),
    NgbModule,
    FormsModule,
    NgbModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
