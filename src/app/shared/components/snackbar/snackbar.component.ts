import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {
  @Input({ required: true }) message!: string;
  @Input() type: SnackbarType = SnackbarType.error;

  get typeClass(): string {
    return `snackbar--type-${ this.type }`
  }
}
