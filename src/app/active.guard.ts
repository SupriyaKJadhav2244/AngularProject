import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { RouteServiceService } from './route-service.service';

@Injectable({
  providedIn: 'root'
}) 

export class ActiveGuard implements CanActivate {
  constructor(private service:RouteServiceService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.service.isAdminRights()){
      return true
    }else{
      alert("You Don't Have Permision To Open This Page");
      this.router.navigate(['/HomeComponent']);
    }
  }
  
}
