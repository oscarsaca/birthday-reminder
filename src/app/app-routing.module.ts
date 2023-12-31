import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SplashComponent } from "./pages/splash/splash.component";
import { LogInComponent } from "./pages/login/login.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";
import { HomeComponent } from "./pages/home/home.component";
import { ContactsComponent } from "./pages/contacts/contacts.component";
import { NotificationsComponent } from "./pages/notifications/notifications.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { ErrorComponent } from "./pages/error/error.component";
import { authGuard } from "./shared/guards/auth.guard";

export const ROUTES: Routes = [
  { path: 'error', component: ErrorComponent },
  { path: 'splash', component: SplashComponent },
  { path: 'login', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'contacts', component: ContactsComponent, canActivate: [authGuard] },
  { path: 'notifications', component: NotificationsComponent, canActivate: [authGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [authGuard] },
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: '**', redirectTo: 'error' },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
