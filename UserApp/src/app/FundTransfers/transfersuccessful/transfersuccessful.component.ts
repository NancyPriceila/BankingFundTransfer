import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from 'src/app/models/services/transaction.service';

@Component({
  selector: 'app-transfersuccessful',
  templateUrl: './transfersuccessful.component.html',
  styleUrls: ['./transfersuccessful.component.css']
})
export class TransfersuccessfulComponent implements OnInit {
  from_account:number=0;
  constructor(private activatedRoute:ActivatedRoute,private transactionService:TransactionService) { 
    this.activatedRoute.params.subscribe(params=>this.from_account=params["id"]);
    console.log(this.from_account);
    this.transactionService.getTransaction(this.from_account).subscribe(t=>console.log(t));
  }

  ngOnInit(): void {
  }
  onClose(){
    
  }
}
