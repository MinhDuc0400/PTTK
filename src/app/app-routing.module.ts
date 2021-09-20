import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTimesheetComponent } from './my-timesheet/my-timesheet.component';
import { WorkingCalanderComponent } from './working-calander/working-calander.component';

const routes: Routes = [
  {path: '', redirectTo: '/mytimesheet', pathMatch: 'full'},
  {path: 'mytimesheet', component: MyTimesheetComponent},
  {path: 'workingcalander', component: WorkingCalanderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
