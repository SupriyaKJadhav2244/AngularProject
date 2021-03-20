import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { TemplateServiceService } from '../template-service.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  data = new Model();
  names: any;
  regForm: any;

  constructor(private TService:TemplateServiceService) { } 

  ngOnInit(): void {
  }

  Register(regForm){ 
    // console.log(regForm.value.name); 
    // console.log(regForm.value.email); 
    // console.log(this.data);
    this.TService.postData(this.data).subscribe(data=>{console.log("success",data)}); 
  }
}
