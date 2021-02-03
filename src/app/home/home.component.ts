import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  age: number;
  
  constructor() { }

  ngOnInit(): void {
    let birthdate = new Date(1998, 7, 13);

    let today = new Date();
    this.age = moment().diff(birthdate, 'year')

    let todayMinusAge = today.setFullYear(today.getFullYear() - this.age)
    
    if(moment(todayMinusAge).isBefore(birthdate)) {
      this.age--;
    }
  }
}
