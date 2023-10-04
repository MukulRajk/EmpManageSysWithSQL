// app-routing.module.ts
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { NgModule } from '@angular/core';
import { EmployeeService } from './employee.service';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
const routes: Routes = [

  
  { path: 'list', component: EmployeeListComponent },
  { path: 'add', component: EmployeeAddComponent },
  { path: 'edit/:id', component: EmployeeEditComponent },
  { path: 'detail/:id', component: EmployeeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
