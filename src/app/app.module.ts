import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideRightBarComponent } from './layout/side-right-bar/side-right-bar.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { MyTimesheetComponent } from './my-timesheet/my-timesheet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideRightBarComponent,
    MyTimesheetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
