import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'demo';
  constructor(private fb:FormBuilder){}

  submit=false
  emp:any;

  employeeForm = this.fb.group({
    name:['san', Validators.required],
    address:[''],
    dob:[''],
    role:[''],
    phone:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
    gender:['']

  })

  get f(){
    return this.employeeForm.controls;
  }

  onsubmit(){
    let data = this.employeeForm
    localStorage.setItem('emp', JSON.stringify(data))
  
  }

  getData(){
    let data:any = localStorage.getItem('session')
    this.emp = JSON.parse(data);
  }

}
