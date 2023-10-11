import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import { routes } from "./app/app-routing.module";
import { importProvidersFrom } from "@angular/core";
import { LottieModule } from 'ngx-lottie';
import player, { LottiePlayer } from 'lottie-web';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { environment } from "./environments/environment";

export function playerFactory(): LottiePlayer {
  return player;
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      LottieModule.forRoot({ player: playerFactory }),
      AngularFireAuthModule,
      AngularFireModule.initializeApp(environment.firebase),
    ])
  ]
});
