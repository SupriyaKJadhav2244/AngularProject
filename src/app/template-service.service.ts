import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from './model';

@Injectable({
  providedIn: 'root'
})
export class TemplateServiceService {

  constructor(private http:HttpClient) { }

  regiUrl:string = "http://localhost:8081/AngularProject/Registration.php";
  getAllDataUrl:string = "http://localhost:8081/AngularProject/FetchAllData.php";
  getSpecificDataUrl:string="http://localhost:8081/AngularProject/FetchSpecificData.php/?Id=";
  updateDataUrl:string="http://localhost:8081/AngularProject/UpdateData.php"; 
  deleteDataUrl:string="http://localhost:8081/AngularProject/DeleteData.php/?Id=";

  postData(values){
    // console.log(values);
    return this.http.post(this.regiUrl,values); 
  }
  getAllData(){
    return this.http.get(this.getAllDataUrl,{responseType: 'text'});
  }
  getSpecificData(id){
    // console.log(id);
    return this.http.get(this.getSpecificDataUrl+`${id}`,{responseType: 'text'});
  }
  updateData(parsedData){
    // console.log(parsedData);
    return this.http.patch(this.updateDataUrl,parsedData,{responseType: 'text'});
  }
  deleteData(Id){
    // console.log(Id);
    return this.http.delete(this.deleteDataUrl+`${Id}`,{responseType: 'text'});
  }
}
