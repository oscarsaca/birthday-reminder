import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationOptions, LottieComponent } from "ngx-lottie";

@Component({
  selector: 'app-button-loader',
  standalone: true,
  imports: [CommonModule, LottieComponent],
  templateUrl: './button-loader.component.html',
  styleUrls: ['./button-loader.component.scss']
})
export class ButtonLoaderComponent {
  options: AnimationOptions = {
    path: '/assets/lottie-animations/jumping-dots.json',
  };
}
