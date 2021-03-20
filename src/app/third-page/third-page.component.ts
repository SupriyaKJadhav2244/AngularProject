import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit { 
   
  constructor() { }

  ngOnInit(): void {
  }
   
  Information:any = [
    {name:'Supriya',gender:'female',DOB:'12/17/1997',married:'No',branch:'Mechanical',yearOfPassing:2019,salary:20000},
    {name:'Sandhya',gender:'female',DOB:'11/23/1995',married:'yes',branch:'Computer',yearOfPassing:2016,salary:20000},
    {name:'Prashant',gender:'male',DOB:'05/01/1991',married:'No',branch:'Computer',yearOfPassing:2012,salary:20000}
  ]

}
