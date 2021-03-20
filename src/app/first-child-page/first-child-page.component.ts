import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { TemplateServiceService } from '../template-service.service';

@Component({
  selector: 'app-first-child-page',
  templateUrl: './first-child-page.component.html',
  styleUrls: ['./first-child-page.component.css']
})
export class FirstChildPageComponent implements OnInit {
  key: any;

  constructor(private TService:TemplateServiceService) { }
 
  data:any=[];
  parsedValue;

  ngOnInit(){
    this.TService.getAllData().subscribe(Info=>{this.data=Info; 
      console.log(this.data);
      this.parsedValue = JSON.parse(this.data);
      console.log(this.parsedValue);  
      }
    )
  }  

  delete(Id){
    // console.log(Id);
    this.TService.deleteData(Id).subscribe(data=>{console.log("success",data)});
  }
  
}
