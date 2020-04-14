import { Component, OnInit } from '@angular/core';
import{ FormControl,FormGroup,Validators } from '@angular/forms'

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {
  
  userprofile:FormGroup
onSubmit(){
  console.warn(this.userprofile.value); 
  
}
  constructor() { }
  
  ngOnInit(): void {
  this.userprofile= new FormGroup({

    'firstName': new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    
    ]),

  })

  }

}
