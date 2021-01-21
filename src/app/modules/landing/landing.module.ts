import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { PresentationComponent } from './components/presentation/presentation.component';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, PresentationComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class LandingModule {
}
