import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  standalone: true,
  imports: [CommonModule],

})
export class PageHeaderComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: false }) subtitle!: string;
}
