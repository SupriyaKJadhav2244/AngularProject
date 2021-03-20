import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count:number=0;
  message: string;
  name: string;

  constructor() { }

  ngOnInit(): void {
  }
  IncreaseByOne(){
    this.count=this.count+1;
    this.message="Counter Increase : "+this.count; 
  }
  DecreaseByOne(){
    this.count=this.count-1;
    this.message="Counter Decrease : "+this.count;
  }
  Mess(){
    this.name="Supriya";
  }


}
