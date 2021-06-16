import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GarageComponent } from './modules/components/garage/garage.component';
import { WinnersComponent } from './modules/components/winners/winners.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'garage/:id', component: GarageComponent },
  { path: 'winners/:id', component: WinnersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
