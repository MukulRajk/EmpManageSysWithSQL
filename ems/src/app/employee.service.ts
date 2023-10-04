// employee.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { catchError,throwError } from 'rxjs';
import { Pipe } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})


export class EmployeeService {
  private apiUrl = 'http://localhost:3000/api/employees';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee)
    .pipe(
      catchError((error) => {
        console.error('Error adding employee:', error);
        return throwError(error);
      })
    );


  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError((error) => {
        console.error('Error getting employee:', error);
        return throwError(error);
      })
    )
    ;
  }

  updateEmployee(id: number, employee: Employee): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, employee)
    .pipe(
      catchError((error) => {
        console.error('Error updating employee:', error);
        return throwError(error);
      })
    )
    
    ;
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
    .pipe(
      catchError((error) => {
        console.error('Error deleting employee:', error);
        return throwError(error);
      })
    )
    ;
  }



  getEmployeeByUsernameAndDOB(username: string, password: string): 
  Observable<Employee | null> {
    const url = `${this.apiUrl}?username=${username}&password=${password}`;
    return this.http.get<Employee[]>(url).pipe(
      map((employees: Employee[]) => {
        if (employees.length === 1) {
          return employees[0];
        } else {
          return null;
        }
      })
    );
  }


}

