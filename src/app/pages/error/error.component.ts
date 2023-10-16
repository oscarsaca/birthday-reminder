import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationOptions, LottieComponent } from "ngx-lottie";
import { RouterLink } from "@angular/router";
import { PageHeaderComponent } from "../../shared/components/page-header/page-header.component";

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule, LottieComponent, RouterLink, PageHeaderComponent],
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  options: AnimationOptions = {
    path: '/assets/lottie-animations/error-calendar.json',
  };
}
