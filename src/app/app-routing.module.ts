import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateChildGuard } from './activate-child.guard';
import { ActiveGuard } from './active.guard';
import { DeactivateGuard } from './deactivate.guard';
import { FirstChildPageComponent } from './first-child-page/first-child-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundPageComponent } from './page-not-found-page/page-not-found-page.component';
import { ReactiveSpecificDataComponent } from './reactive-specific-data/reactive-specific-data.component';
import { SecondChildPageComponent } from './second-child-page/second-child-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { SpecificDataComponent } from './specific-data/specific-data.component'; 
import { ThirdPageComponent } from './third-page/third-page.component';

const routes: Routes = [
  {path:'',redirectTo:'HomeComponent',pathMatch:'full'},
  {path:'HomeComponent',component:HomePageComponent}, 
  {path:'FirstComponent',
    children : [
      {path:'',component:FirstPageComponent},
      {path:'FirstChildComponent',
        children : [
          {path:'',component:FirstChildPageComponent,canActivateChild:[ActivateChildGuard]},
          {path:'SpecificDataComponent/:Id',component:SpecificDataComponent} 
        ]
      }
    ]
  },
  {path:'SecondComponent',
  children : [
    {path:'',component:SecondPageComponent,canActivate:[ActiveGuard]},
    {path:'SecondChildComponent',
    children:[
      {path:'',component:SecondChildPageComponent},
      {path:'ReactiveSpecificDataComponent/:Id',component:ReactiveSpecificDataComponent} 
        ]
      }
    ]
  },
  {path:'ThirdComponent',component:ThirdPageComponent,canDeactivate:[DeactivateGuard]},
  // {path:'ThirdChildPage',component:ThirdChildComponent} ,
  {path:'lLoading',loadChildren:()=>import('./firstmodule/firstmodule.module').then(m=>m.FirstModuleModule)},
  {path:'**',component:PageNotFoundPageComponent}      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
