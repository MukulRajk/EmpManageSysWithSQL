// employee-add.component.ts
import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { EmployeeEditComponent } from '../employee-edit/employee-edit.component';
import { Event } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})

export class EmployeeAddComponent {
  employee: Employee = new Employee();

  isAddEmployeeEnabled = false; 
  username: string = '';
  password: string = '';
 

  constructor(
    private employeeService: EmployeeService,
    private datePipe: DatePipe,
    public authService: AuthenticationService

    ) {}

    onSubmit() {
      if (this.authService.isLoggedIn()) {
        const datePipeResult = this.datePipe.
         transform(this.employee.dob, 'yyyy-MM-dd');
          if (datePipeResult !== null){
            this.employee.dob=datePipeResult;
          } else {
            console.log('Date can`t be null!');
          }
      } else {
        window.alert('You must log in first.');
      }
      // Format the date to 'yyyy-MM-dd' before submitting
    



    
      if (this.isValidDate(this.employee.dob)) {
        this.employeeService.addEmployee(this.employee).subscribe(
          (newEmployee: Employee) => {
            // Handle success, reset the form, show a success message, etc.
            console.log('Employee added successfully:', newEmployee);
            window.alert('Form submitted successfully!');
          },
          (error) => {
            console.error('Error adding employee:', error);
          }
        );
      } else {
        window.alert('Invalid date format. Please use the yyyy-mm-dd format.');
      }
    }
    
  

    onSubmit2() {
      const username = this.username;
      const password = this.password;

      if (this.authService.login(username, password)) {
        this.isAddEmployeeEnabled=true;
      if (this.validateCredentials(username, password)) {
        if (this.isValidDate(this.employee.dob)) {
          this.employeeService.addEmployee(this.employee).subscribe(
            (newEmployee: Employee) => {
              // Handle success, reset the form, show a success message, etc.
              console.log('Employee added successfully:', newEmployee);
              window.alert('Form submitted successfully!');
            },
            (error) => {
              console.error('Error adding employee:', error);
            }
          );
        } else {
          window.alert('Invalid date format. Please use the yyyy-mm-dd format.');
        }
      }
      
    }
    else {
        window.alert('Invalid credentials. Please check your first name and date of birth.');
      }

      
    
    }

    logout() {
      this.authService.logout();
      this.isAddEmployeeEnabled = false; 
    }




    private validateCredentials(username: string, password: string): boolean {
      
      return username === 'Mukul' && password === '2023-10-03';
    }   
    
    private isValidDate(dateString: string): boolean {
      // Use a regular expression to check if the date string matches the yyyy-mm-dd format
      const datePattern = /^\d{4}-\d{2}-\d{2}$/;
      return datePattern.test(dateString);
    }

  }
