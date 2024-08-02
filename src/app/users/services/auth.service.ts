import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
  ];

  constructor() { }

  // Método para validar el usuario
  validateUser(email: string, password: string): boolean {
    return this.users.some(user => user.email === email && user.password === password);
  }
}
