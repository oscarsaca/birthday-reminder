import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from "../../shared/components/page-header/page-header.component";
import { NoResultsComponent } from "../../shared/components/no-results/no-results.component";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, NoResultsComponent],
})
export class NotificationsComponent {

}
