import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteServiceService {

  constructor() { }

  isAdminRights(){
    return true;
  }
  isChildRights(){
    return false;
  }
}
