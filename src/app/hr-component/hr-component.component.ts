import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hr-component',
  templateUrl: './hr-component.component.html',
  styleUrls: ['./hr-component.component.scss']
})
export class HrComponentComponent implements OnInit {
  message: any ;
  constructor(private data: DataService) { }

  ngOnInit(): void {

    this.data.currentMessage.subscribe(message => this.message = message)
    console.log(this.message)
  }

}
