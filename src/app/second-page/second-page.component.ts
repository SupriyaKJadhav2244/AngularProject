import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveModel } from '../reactive-model';
import { ReactiveServiceService } from '../reactive-service.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  contactForm: FormGroup;
  name: any;

  constructor(private fb:FormBuilder,private RService:ReactiveServiceService) { } 

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstname : ['',Validators.required],
      lastname : ['',Validators.required],
      email : ['',[Validators.required,Validators.pattern("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$")]] 
    })
  }

  onSubmit(value){
    // this.name = this.contactForm.get('firstname').value;
    // console.log(this.name);
    // console.log(this.contactForm.value); 
    // console.log(value); 
    this.RService.postData(value).subscribe(data=>{console.log("success",data)});
  }
  ResetData(){
    this.contactForm.reset({
      firstname:'Bhagyashree',
      lastname:'Jadhav',
      email:'bha@gmail.com'
    });
  }
}
