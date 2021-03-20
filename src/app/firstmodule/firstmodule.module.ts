import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstModuleRoutingModule } from './first-module-routing.module';
import { FirstModulePageComponent } from './first-module-page/first-module-page.component';


@NgModule({
  declarations: [
    FirstModulePageComponent
  ],
  imports: [
    CommonModule,
    FirstModuleRoutingModule
  ]
})
export class FirstModuleModule {
  constructor(){
    console.log("first Module Is Working");
  }
 }
