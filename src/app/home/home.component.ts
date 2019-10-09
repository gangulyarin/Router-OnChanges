import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arr=[];
  constructor(){
    for(let lcv=0;lcv<10;lcv++){
     this.arr.push(lcv); 
    }
  }

  ngOnInit() {
  }

}
