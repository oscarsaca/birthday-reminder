import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Router, RouterLink } from "@angular/router";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "../../shared/services/auth.service";
import { ButtonLoaderComponent } from "../../shared/components/button-loader/button-loader.component";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, ButtonLoaderComponent],
  providers: [AuthService],
})
export class SignUpComponent {
  isSigningUp: boolean = false;

  signUpForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  signup(): void {
    if (this.signUpForm.valid) {
      this.isSigningUp = true;

      const { email, password } = this.signUpForm.value;

      this.authService.signup(email, password)
        .subscribe({
          next: response => {
            this.router.navigate(['/home']);
          },
          error: error => {
            this.isSigningUp = false;

            // TODO: Make snackbar component and lazy load
            alert(error.message);
          }
        });
    }
  }
}
