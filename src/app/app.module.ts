import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { PageNotFoundPageComponent } from './page-not-found-page/page-not-found-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FirstChildPageComponent } from './first-child-page/first-child-page.component';
import { SecondChildPageComponent } from './second-child-page/second-child-page.component';
import { TemplateServiceService } from './template-service.service';
import { SpecificDataComponent } from './specific-data/specific-data.component';
import { ReactiveServiceService } from './reactive-service.service';
import { ReactiveSpecificDataComponent } from './reactive-specific-data/reactive-specific-data.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { CustomPipePipe } from './custom-pipe.pipe'; 
import { ActiveGuard } from './active.guard';
import { RouteServiceService } from './route-service.service';
import { DeactivateGuard } from './deactivate.guard';
import { ActivateChildGuard } from './activate-child.guard';
import { ThirdChildComponent } from './third-child/third-child.component';
import { CounterComponent } from './counter/counter.component';
import { ParentCounterComponent } from './parent-counter/parent-counter.component';  

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    PageNotFoundPageComponent,
    HomePageComponent,
    FirstChildPageComponent,
    SecondChildPageComponent,
    SpecificDataComponent,
    ReactiveSpecificDataComponent,
    ThirdPageComponent,
    CustomPipePipe,
    ThirdChildComponent,
    CounterComponent,
    ParentCounterComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule  
  ],
  providers: [
    TemplateServiceService,
    ReactiveServiceService,
    ActiveGuard,
    RouteServiceService,
    DeactivateGuard,
    ActivateChildGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("App Module Is Working");
  }
}
