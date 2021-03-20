import { Component, OnInit } from '@angular/core';
import { ReactiveServiceService } from '../reactive-service.service';

@Component({
  selector: 'app-second-child-page',
  templateUrl: './second-child-page.component.html',
  styleUrls: ['./second-child-page.component.css']
})
export class SecondChildPageComponent implements OnInit {
  info: any=[];

  constructor(private RService:ReactiveServiceService) { }

  ngOnInit(): void {
    this.RService.getData().subscribe(data=>{this.info=data;
      // console.log(this.info)
    }); 
  }
  delete(Id){
    // console.log(Id);
    this.RService.deletData(Id).subscribe(data=>{console.log("success",data)});
  }

}
