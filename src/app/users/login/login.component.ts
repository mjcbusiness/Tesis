import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import { UserService } from '../services/user.service';
import { ApiResponse } from '../models/user-info-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  errorMessage: string = '';
  formulario: FormGroup;
  userData!: ApiResponse;
  constructor(private authService: AuthService, 
              private router:Router,
              private formBuilder: FormBuilder,
              private userService: UserService)
  {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  onSubmit() {
    console.log('onSubmit llamado');
    
    if (this.authService.validateUser(this.formulario.value.email, this.formulario.value.password)) {
      console.log('Inicio de sesión exitoso!');
      var user=this.getUserFromEmail(this.formulario.value.email);
      this.router.navigate([`/inicio/${user}`]);
    } else {
      // Usuario no válido
      this.errorMessage = 'Correo electrónico o contraseña incorrectos.';
    }
  }
  getUserFromEmail(value: string): string {
    if (!value) return value; // Si el valor está vacío o nulo, devolverlo tal cual
    const atIndex = value.indexOf('@');
    return atIndex !== -1 ? value.substring(0, atIndex) : value;
  }
}
