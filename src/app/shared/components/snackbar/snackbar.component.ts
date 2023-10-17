import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from "@angular/animations";

export enum SnackbarType {
  info = 'info',
  success = 'success',
  error = 'error'
}

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translate(-50%,100%)' }),
        animate('350ms cubic-bezier(.17,0,.17,1)', style({ opacity: 1, transform: 'translate(-50%, 0)' })),
      ]),
      transition(':leave', [
        animate('350ms cubic-bezier(.17,0,.17,1)', style({ opacity: 0, transform: 'translate(-50%, 100%)' })),
      ]),
    ]),
  ],
})
export class SnackbarComponent {
  @Input({ required: true }) message!: string;
  @Input() exitButton: boolean = true;
  @Input() type: SnackbarType = SnackbarType.error;

  get typeClass(): string {
    return `snackbar--type-${ this.type }`
  }
}
