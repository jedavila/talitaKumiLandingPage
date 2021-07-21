import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './pages/game/game.component';
import { RestaComponent } from './pages/resta/resta.component';
import { MultiplicacionComponent } from './pages/multiplicacion/multiplicacion.component';
import { DivisionComponent } from './pages/division/division.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    GameComponent,
    RestaComponent,
    MultiplicacionComponent,
    DivisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
