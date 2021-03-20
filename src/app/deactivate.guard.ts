import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ThirdPageComponent } from './third-page/third-page.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<ThirdPageComponent> {
  canDeactivate(){
    return confirm("Are You Sure To Leave This Page ?");
  }  
}