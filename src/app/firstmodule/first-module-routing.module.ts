import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstModulePageComponent } from './first-module-page/first-module-page.component';

const routes: Routes = [
  {path:'FirstModPage',component: FirstModulePageComponent} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstModuleRoutingModule { }
