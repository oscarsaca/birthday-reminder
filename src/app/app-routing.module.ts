import { Routes } from "@angular/router";
import { SplashComponent } from "./pages/splash/splash.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";
import { LogInComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { NotificationsComponent } from "./pages/notifications/notifications.component";
import { ContactsComponent } from "./pages/contacts/contacts.component";
import { SettingsComponent } from "./pages/settings/settings.component";

export const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'splash', component: SplashComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LogInComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: 'home' },
];
