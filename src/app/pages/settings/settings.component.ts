import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { PageHeaderComponent } from "../../shared/components/page-header/page-header.component";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, PageHeaderComponent],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  user$!: Observable<any>;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user$ = this.authService.getCurrentUser();
  }

  logout(): void {
    this.authService.logout().subscribe((): void => {
      this.router.navigate(['/login']);
    });
  }
}
