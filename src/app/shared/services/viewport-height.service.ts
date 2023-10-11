import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewportHeightService {
  setVh(): void {
    let vh: number = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    // sets value for --100vh in _variables.scss
  }
}
