import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ExitComponent {
  @Output() exitClick: EventEmitter<void> = new EventEmitter<void>();

  exitClicked(): void {
    this.exitClick.emit();
  }
}
