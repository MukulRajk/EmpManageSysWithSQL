
export class Employee {


  
    id: number ;
    firstName: string;
    lastName: string;
    email: string;
    dob: string;  //Date
    contact: string;
    address: string;
  
    constructor() {
    
      this.id = 0;
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.dob = '';/* new Date(); */
      this.contact = '';
      this.address = '';
    }
  }
  