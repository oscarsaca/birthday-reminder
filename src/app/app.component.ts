import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { ViewportHeightService } from "./shared/services/viewport-height.service";
import { filter, map, startWith } from "rxjs/operators";
import { Observable } from "rxjs";

const HIDDEN_ROUTES: string[] = ['/', '/splash', '/login', '/sign-up', '/error'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  showBottomMenu$!: Observable<boolean>;

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.viewportHeightService.setVh();
  }

  constructor(
    private viewportHeightService: ViewportHeightService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.viewportHeightService.setVh();
    this.showBottomMenu$ = this.router.events.pipe(
      filter(this.isNavigationEndEvent),
      map((event: NavigationEnd) => !this.shouldHideMenu(event.url)),
      startWith(true)
    );
  }

  isNavigationEndEvent(event: any): event is NavigationEnd {
    return event instanceof NavigationEnd;
  }

  shouldHideMenu(url: string): boolean {
    return HIDDEN_ROUTES.includes(url);
  }
}
