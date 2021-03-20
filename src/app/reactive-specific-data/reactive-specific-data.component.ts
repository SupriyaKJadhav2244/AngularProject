import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; 
import { ReactiveServiceService } from '../reactive-service.service';

@Component({
  selector: 'app-reactive-specific-data',
  templateUrl: './reactive-specific-data.component.html',
  styleUrls: ['./reactive-specific-data.component.css']
})
export class ReactiveSpecificDataComponent implements OnInit {
  id: any;
  values: any;
  updateReactiveForm: any;
  fname: any;
  FirstName: any;
  outputValue: any;

  constructor(private RService:ReactiveServiceService,private route:ActivatedRoute,private fb:FormBuilder) {
    this.updateReactiveForm = this.fb.group({
      id : [''],
      fname : ['',Validators.required],
      lname : ['',Validators.required],
      email : ['',Validators.required] 
    })
   }

  ngOnInit(): void { 
    // this.route.params.subscribe(params=>{this.id=params['Id'];
    // console.log(this.id)
  // });
    this.id = this.route.snapshot.paramMap.get('Id');
    // console.log(this.id);

    this.RService.getSpecificReactiveData(this.id).subscribe(data=>{this.values=data;
      // console.log(this.values);
    });
  }

  UpdateReactiveData(value){
    // console.log(value);
    this.RService.updateData(value).subscribe(data=>{console.log("success",data)});
  } 
  ResetData(){ 
    this.id = this.route.snapshot.paramMap.get('Id');
    this.RService.getSpecificReactiveData(this.id).subscribe(data=>{this.values=data;
    this.updateReactiveForm.reset({
      id:19,
      fname:'Kishanrao',
      lname:'Jadhav',
      email:'Kishanrao@gmail.com'
      });  
    });
  }
  FillData(){ 
    this.updateReactiveForm.setValue({
      id:20,
      fname:'Bhagyashree',
      lname:'Jadhav',
      email:'Bhagyashree@gmail.com'
      });   
  }
  FillSpecificData(){ 
    this.updateReactiveForm.patchValue({ 
      fname:'Bhagyashree',
      lname:'Jadhav',
      email:'Bhagyashree@gmail.com'
      });   
  }

  Information = "Hii, I'm From Parent";
  getFromOutputDecorator(value){
    console.log(value);
    this.outputValue = value;
  }
  
}
