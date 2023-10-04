//employee-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { Route } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { ParamMap } from '@angular/router';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
/*   employee: Employee; */

  employees: Employee = new Employee();


  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    // Retrieve the employee ID from the route params
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
}
