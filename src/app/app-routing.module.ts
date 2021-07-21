import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriaComponent } from './pages/historia/historia.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GameComponent } from './pages/game/game.component';
import { RestaComponent } from './pages/resta/resta.component';
import { MultiplicacionComponent } from './pages/multiplicacion/multiplicacion.component';
import { DivisionComponent } from './pages/division/division.component';

const routes: Routes = [
  {path:'', component: InicioComponent },
  {path:'historia', component: HistoriaComponent },
  {path:'game', component: GameComponent },
  {path:'game/resta', component: RestaComponent },
  {path:'game/multi', component: MultiplicacionComponent },
  {path:'game/divide', component: DivisionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ InicioComponent, HistoriaComponent]
