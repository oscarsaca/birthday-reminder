import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationOptions, LottieComponent } from "ngx-lottie";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule, LottieComponent, RouterLink],
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  options: AnimationOptions = {
    path: '/assets/lottie-animations/error-calendar.json',
  };
}
