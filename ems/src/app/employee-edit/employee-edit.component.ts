//employee-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { By } from '@angular/platform-browser';

@Component({

  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  /* employee: Employee; */
  employees: Employee = new Employee();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {


  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(this.employees.id).subscribe(
      (employee) => {
        this.employees = employee;
      },
      (error) => {
        console.error('Error fetching employee details:', error);
      }
    );
  }


  onUpdate() {
    this.employeeService.updateEmployee(this.employees.id,this.employees)
    .subscribe(
      () => {
        // Handle success, navigate to employee detail page, show a success message, etc.
        console.log('Employee updated successfully');
        this.router.navigate(['/detail', this.employees.id]);
      },
      (error) => {
        console.error('Error updating employee:', error);
      }
    );
  }
}





































































































































































































































































































































































































































































































