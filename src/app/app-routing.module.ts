import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTimesheetComponent } from './my-timesheet/my-timesheet.component';

const routes: Routes = [
  {path: '', redirectTo: '/mytimesheet', pathMatch: 'full'},
  {path: 'mytimesheet', component: MyTimesheetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
