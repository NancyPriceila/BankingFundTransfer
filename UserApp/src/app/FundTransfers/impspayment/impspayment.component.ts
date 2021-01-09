import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/models/services/transaction.service';
import { Transaction } from 'src/app/models/transaction.module';

@Component({
  selector: 'app-impspayment',
  templateUrl: './impspayment.component.html',
  styleUrls: ['./impspayment.component.css']
})
export class ImpspaymentComponent implements OnInit {
  impsPaymentForm:FormGroup=new FormGroup({});
  submitted = false;
  transaction:Transaction;
  transaction1:any;
  constructor(private formBuilder:FormBuilder,private router:Router,private transactionService:TransactionService) { 
    this.transaction=new Transaction();
  }

  ngOnInit(): void {
    this.impsPaymentForm = this.formBuilder.group({
      fromAccount: ['', Validators.required],
      toAccount: ['', Validators.required],
      amount: ['', Validators.required],
      transDate: ['',Validators.required],
      remark: ['', Validators.required]
  });
  }
  get f() { return this.impsPaymentForm.controls; }
  initiatePayment(){
    this.submitted = true;
    if(this.impsPaymentForm.invalid){
      return;
    }
    else{
      this.transaction.transaction_type="IMPS";
      this.transaction.from_account = this.impsPaymentForm.value["fromAccount"];
      this.transaction.to_account = this.impsPaymentForm.value["toAccount"]
      this.transaction.amount = this.impsPaymentForm.value["amount"];
      this.transaction.transaction_date = this.impsPaymentForm.value["transDate"];
      this.transaction.remarks = this.impsPaymentForm.value["remark"];
      this.transactionService.initiateTransaction(this.transaction).subscribe(t=>console.log(t));
      this.router.navigateByUrl('/transfersuccessful/'+this.transaction.from_account);
    }
  }
  onReset()
  {
    this.submitted=false;
    this.impsPaymentForm.reset();
  }
}
