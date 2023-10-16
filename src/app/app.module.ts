import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from "@angular/common";
import { BottomMenuComponent } from "./shared/components/bottom-menu/bottom-menu.component";
import { LottieModule } from 'ngx-lottie';
import player, { LottiePlayer } from 'lottie-web';
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire/compat";

export function playerFactory(): LottiePlayer {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BottomMenuComponent,
    LottieModule.forRoot({ player: playerFactory }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {
}
