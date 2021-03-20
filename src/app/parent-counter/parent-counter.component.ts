import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-parent-counter',
  templateUrl: './parent-counter.component.html',
  styleUrls: ['./parent-counter.component.css']
})
export class ParentCounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(CounterComponent) counterComponent:CounterComponent;
  Increase(){
    this.counterComponent.IncreaseByOne();
  }
  Decrease(){
    this.counterComponent.DecreaseByOne();
  }
  call(){
    this.counterComponent.Mess();
  }

}
