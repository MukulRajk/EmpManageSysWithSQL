import { Component } from '@angular/core';
import { Event } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

 


export class AppComponent {

  
  showEmployeeDetail: boolean = false;

  onEmployeeAdded(event: boolean) {
    this.showEmployeeDetail = event;
  }
}
