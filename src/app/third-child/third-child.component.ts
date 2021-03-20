import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-third-child',
  templateUrl: './third-child.component.html',
  styleUrls: ['./third-child.component.css']
})
export class ThirdChildComponent implements OnInit {

  @Input() firstInputVar:string;

  @Output() firstOutputVar:EventEmitter<string> = new EventEmitter();

  constructor() { }
  OutputVar = "Hi, I'm From Child";

  ngOnInit(): void {
    console.log(this.firstInputVar);
  }
  outputDecorator(){
    this.firstOutputVar.emit(this.OutputVar);
  }

}
