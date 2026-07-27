import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Hardcoded for the exercise — a real app would set this after a login API call.
  isLoggedIn = true;
}
