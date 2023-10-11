import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AnimationOptions, LottieComponent } from "ngx-lottie";
import { Router } from "@angular/router";

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
  standalone: true,
  imports: [CommonModule, LottieComponent],
})
export class SplashComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/lottie-animations/birthday-cake.json',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout((): void => {
      this.router.navigate(['/home']);
    }, 3000);
  }
}
