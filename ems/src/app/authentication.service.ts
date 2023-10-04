// authentication.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private loggedIn = false;

  login(username: string, password: string): boolean {
    // Check if the provided credentials are correct (you can replace this with your actual authentication logic)
    if (username === 'Mukul' && password === '2023-10-03') {
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
