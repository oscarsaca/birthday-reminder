import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { map, Observable } from "rxjs";
import { AuthService } from "../../shared/services/auth.service";
import { PageHeaderComponent } from "../../shared/components/page-header/page-header.component";
import { NoResultsComponent } from "../../shared/components/no-results/no-results.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, NoResultsComponent],
})
export class HomeComponent implements OnInit {
  user$!: Observable<any>;
  userFirstname$!: Observable<string>;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user$ = this.authService.getCurrentUser();

    this.userFirstname$ = this.user$.pipe(
      map(user => user?.displayName?.split(' ')[0])
    )
  }
}
