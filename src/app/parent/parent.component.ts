import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  num:number;
  sq: number;
  trip: number;
  constructor(private route:ActivatedRoute) {
    
   }

  ngOnInit() {
    this.route.paramMap.subscribe( p=>{
      this.num=parseInt(p.get('id'));
      this.sq=this.num*this.num;
      this.trip=this.num*this.sq;
    });
  }

}
