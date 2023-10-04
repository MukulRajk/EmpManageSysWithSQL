//employee-list.component.ts
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';
import { NgModule } from '@angular/core';
import { Employee } from '../employee.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
 /*  employees : Employee[]; */
   employees: Employee []=[];
   employee: Employee | null = null;

   username: string = '';
  password: string = '';

   

  constructor(private employeeService : EmployeeService,
    private datePipe: DatePipe
    
    ){}

ngOnInit(){

  this.getEmployees();
// This component should display a single employee based on validation
    // Modify this logic to fetch the employee based on your criteria
    /* const username = 'employeeFirstName'; // Replace with actual username
    const dob = 'employeeDOB'; // Replace with actual DOB

    this.employeeService.getEmployeeByUsernameAndDOB(username, dob).subscribe(
      (employee) => {
        this.employee = employee;
        
      },
      (error) => {
        console.error('Error fetching employee:', error);
      }
    ); */


}

  getEmployees(){

  this.employeeService.getEmployees().subscribe(
    (employeeList) => 
    {
      this.employees=employeeList;

    },

  (error) =>{
    console.error('Error fetching employees : ',error);
  }
  );

  }     
  fetchEmployee() {
    const username = 'Jayesh'; // Replace with actual username
    const password = '30-12-1998'; // Replace with actual DOB
      
/*     for date
 */    const formattedDOB = this.formatDate(password);
    this.employeeService.
    getEmployeeByUsernameAndDOB(username, formattedDOB).subscribe(
      (employee) => {
        this.employee = employee;
      },
      (error) => {
        console.error('Error fetching employee:', error);
      }
    );
  }
   /* for Date formatting */
  private formatDate(password: string): string {
    // Parse the existing date and format it as 'YYYY-MM-DD'
    const date = new Date(password);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }





}
  





  
