import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TemplateServiceService } from '../template-service.service';

@Component({
  selector: 'app-specific-data',
  templateUrl: './specific-data.component.html',
  styleUrls: ['./specific-data.component.css']
})
export class SpecificDataComponent implements OnInit {
  id: string;
  value: any=[];
  parsedData: any;

  constructor(private route:ActivatedRoute, private TService:TemplateServiceService) { }

  ngOnInit(): void {
  //  this.id = this.route.snapshot.paramMap.get("Id");
      this.route.params.subscribe(params=>{this.id=params['Id'];
      // console.log(this.id);

    this.TService.getSpecificData(this.id).subscribe(data=>{this.value=data;
      // console.log(this.value); 
      this.parsedData = JSON.parse(this.value);
      // console.log(this.parsedData);
        }
      );
    } 
   )
  }

  Update(updateForm){
    // console.log(this.parsedData.Id);
    this.TService.updateData(this.parsedData).subscribe(data=>{console.log("success",data)})
  }

}
