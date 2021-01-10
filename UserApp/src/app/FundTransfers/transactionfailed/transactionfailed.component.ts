import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transactionfailed',
  templateUrl: './transactionfailed.component.html',
  styleUrls: ['./transactionfailed.component.css']
})
export class TransactionfailedComponent implements OnInit {
error_message:string="";
mode:string=""
  constructor(private activatedRoute:ActivatedRoute,private router:Router) {
    this.activatedRoute.params.subscribe(params=>this.error_message=params["msg"]);
    this.activatedRoute.params.subscribe(params=>this.mode=params["mode"]);
   }

  ngOnInit(): void {
  }

  onClick(){
    if(this.mode=="IMPS"){
      this.router.navigateByUrl('/impspayment');
    }
    else{
      if(this.mode=="NEFT"){
        this.router.navigateByUrl('/neftpayment');
      }
      else{
        if(this.mode=="RTGS"){
          this.router.navigateByUrl('/rtgspayment');
        } 
      }
    }
  }

}
