import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paye-order',
  templateUrl: './paye-order.component.html',
  styleUrls: ['./paye-order.component.scss']
})
export class PayeOrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tva=1000;
  checks=false;
    Showtva(e :any) {
   
   if(e.target.checked==true){
     this.checks=true;
     (document.getElementById('tva')as any).style.display = "flex";
   }
   else{
     this.checks=false;
    (document.getElementById('tva')as any).style.display = "none";
   }
    }
}
