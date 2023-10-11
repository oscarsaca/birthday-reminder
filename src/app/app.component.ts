import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from "@angular/router";
import { BottomMenuComponent } from "./shared/components/bottom-menu/bottom-menu.component";
import { ViewportHeightService } from "./shared/services/viewport-height.service";
import { NgIf } from "@angular/common";
import { filter, Subject, takeUntil } from "rxjs";

const HIDDEN_ROUTES: string[] = ['/', '/splash', '/login', '/sign-up'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    BottomMenuComponent,
    NgIf
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.viewportHeightService.setVh();
  }

  private destroy$: Subject<void> = new Subject<void>();

  showBottomMenu: boolean = true;

  constructor(
    private viewportHeightService: ViewportHeightService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.viewportHeightService.setVh();
    this.subscribeToRouterEvents();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  subscribeToRouterEvents(): void {
    this.router.events.pipe(
      filter(this.isNavigationEndEvent),
      takeUntil(this.destroy$)
    ).subscribe((event: NavigationEnd): void => {
      this.showBottomMenu = !this.shouldHideMenu(event.url);
    });
  }

  isNavigationEndEvent(event: any): event is NavigationEnd {
    return event instanceof NavigationEnd;
  }

  shouldHideMenu(url: string): boolean {
    return HIDDEN_ROUTES.includes(url);
  }
}
