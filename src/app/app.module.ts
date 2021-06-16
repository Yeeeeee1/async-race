import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GarageComponent } from './modules/components/garage/garage.component';
import { WinnersComponent } from './modules/components/winners/winners.component';
import { ColorSketchModule } from 'ngx-color/sketch';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, GarageComponent, WinnersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ColorSketchModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
