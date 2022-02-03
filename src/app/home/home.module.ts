import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/Home/home.component';
import { HomeRoutingMoudule } from './home-routing.module';

import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [BannerComponent, HomeComponent],
  imports: [CommonModule, HomeRoutingMoudule, SharedModule],
})
export class HomeModule {}
