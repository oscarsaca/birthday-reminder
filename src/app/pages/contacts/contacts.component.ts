import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from "../../shared/components/page-header/page-header.component";
import { NoResultsComponent } from "../../shared/components/no-results/no-results.component";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, NoResultsComponent],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

}
