import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { Employee } from './employee.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AuthenticationService } from './authentication.service';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    EmployeeDetailComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,CommonModule,
    RouterModule.forChild([

      {path:'list',component:EmployeeListComponent },
      {path:'add',component:EmployeeAddComponent}
    ])
  
  
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

