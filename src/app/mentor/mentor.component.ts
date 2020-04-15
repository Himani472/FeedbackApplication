import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styles: []
})
export class MentorComponent implements OnInit {
  registerForm: FormGroup;
  message:object;
  constructor(private data: DataService) { }

  ngOnInit(): void {

    this.registerForm = new FormGroup({
      team: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      date: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      Subject: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
     TaskDetails: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)])
 });
 this.data.currentMessage.subscribe(message => this.message = message)
  }
  onSubmit() {
    console.log(this.registerForm.value);
    alert('Form submit succesfully');
    this.data.changeMessage(this.registerForm.value)
    

  }
 

}
