import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReactiveServiceService {

  constructor(private http:HttpClient) { }

  postDataUrl:string="http://localhost:8081/AngularProject/RegistrationReactive.php";
  getDataUrl:string="http://localhost:8081/AngularProject/FetchAllDataReactive.php";
  getSpecificDataUrl:string="http://localhost:8081/AngularProject/FetchSpecificDataReactive.php/?Id=";
  updateDataUrl:string="http://localhost:8081/AngularProject/UpdateDataReactive.php";
  deleteDataUrl:string="http://localhost:8081/AngularProject/DeleteDataReactive.php/?Id="; 

  postData(Data){
    // console.log(Data); 
    return this.http.post(this.postDataUrl,Data);
  }
  getData(){
    return this.http.get(this.getDataUrl);
  }
  getSpecificReactiveData(id){
    // console.log(id);
    return this.http.get(this.getSpecificDataUrl+`${id}`);
  }
  updateData(value){
    // console.log(value);
    return this.http.post(this.updateDataUrl,value,{responseType:'text'});
  }
  deletData(Id){
    // console.log(Id);
    return this.http.delete(this.deleteDataUrl+`${Id}`,{responseType:'text'});
  } 
}
