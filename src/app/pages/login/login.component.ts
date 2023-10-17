import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Router, RouterLink } from "@angular/router";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "../../shared/services/auth.service";
import { ButtonLoaderComponent } from "../../shared/components/button-loader/button-loader.component";
import { PageHeaderComponent } from "../../shared/components/page-header/page-header.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, ButtonLoaderComponent, PageHeaderComponent],
})
export class LogInComponent {
  isLoggingIn: boolean = false;
  isRecoveringPassword: boolean = false;

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.isLoggingIn = true;

      const { email, password } = this.loginForm.value;

      this.authService.login(email, password)
        .subscribe({
          next: response => {
            this.router.navigate(['/home']);
          },
          error: error => {
            this.isLoggingIn = false;

            // TODO: Make snackbar component and lazy load
            alert(error.message);
          }
        });
    }
  }

  recoverPassword(): void {
    this.isRecoveringPassword = true;

    this.authService.recoverPassword(this.loginForm.value.email).subscribe({
      next: (): void => {
        this.isRecoveringPassword = false;

        // TODO: Make snackbar component and lazy load
        alert('Password reset email sent!');
      },
      error: error => {
        this.isRecoveringPassword = false;

        // TODO: Make snackbar component and lazy load
        alert(error.message);
      }
    })
  }
}
