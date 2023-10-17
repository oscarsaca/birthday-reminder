import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationOptions, LottieComponent } from "ngx-lottie";

@Component({
  selector: 'app-no-results',
  standalone: true,
  imports: [CommonModule, LottieComponent],
  templateUrl: './no-results.component.html',
  styleUrls: ['./no-results.component.scss']
})
export class NoResultsComponent {
  @Input({ required: true }) title!: string;

  options: AnimationOptions = {
    path: '/assets/lottie-animations/search-empty.json',
  };
}
