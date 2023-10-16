import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Router, UrlTree } from "@angular/router";
import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";

export const authGuard = () => {
  const currentAuthService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return currentAuthService.getCurrentUser().pipe(
    map(user => {
      if (!user) {
        router.navigate(['/login'])
        return false;
      }
      
      return true;
    }),
    catchError(() => {
      router.navigate(['/login']);
      return of(false);
    })
  ) as Observable<boolean | UrlTree>;
}
