
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Person } from '../model/person';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  myForm: FormGroup;
  myArray : Person[] = [];
  displayedColumns: string[] = ['name', 'age', 'email'];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['',[Validators.required]],
      age: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
    });
  }

  get userName(){
    return this.myForm.get('name');
  }
  get userAge(){
    return this.myForm.get('age');
  } 
  get userEmail(){
    return this.myForm.get('email');
   }

  Save(){
    this.myArray.push(this.myForm.value);
  }

  delete(i){
    this.myArray.splice(i, 1);
  }

}
