import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input()
  num:number;
  arr:number[];
  constructor() { }

  ngOnInit() {
    /*this.arr=[];
    for(let lcv=0;lcv<this.num;lcv++){
      this.arr.push(lcv);
    }*/
  }

  ngOnChanges(changes: SimpleChanges) {
    this.num=changes.num.currentValue;
    this.arr=[];
    for(let lcv=0;lcv<this.num;lcv++){
      this.arr.push(lcv);
    }
  }

}
