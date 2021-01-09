import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/models/services/transaction.service';
import { Transaction } from 'src/app/models/transaction.module';

@Component({
  selector: 'app-neftpayment',
  templateUrl: './neftpayment.component.html',
  styleUrls: ['./neftpayment.component.css']
})
export class NeftpaymentComponent implements OnInit {
  neftPaymentForm:FormGroup=new FormGroup({});
  submitted = false;
  transaction:Transaction;

  constructor(private formBuilder:FormBuilder,private router:Router,private transactionService:TransactionService) { 
    this.transaction=new Transaction();
  }

  ngOnInit(): void {
    this.neftPaymentForm = this.formBuilder.group({
      fromAccount: ['', Validators.required],
      toAccount: ['', Validators.required],
      amount: ['', Validators.required],
      transDate: ['',Validators.required],
      remark: ['', Validators.required]
  });
  }
  get f() { return this.neftPaymentForm.controls; }
  initiatePayment(){
    this.submitted = true;
    if(this.neftPaymentForm.invalid){
      return;
    }
    else{
      this.transaction.transaction_type="NEFT";
      this.transaction.from_account = this.neftPaymentForm.value["fromAccount"];
      this.transaction.to_account = this.neftPaymentForm.value["toAccount"]
      this.transaction.amount = this.neftPaymentForm.value["amount"];
      this.transaction.transaction_date = this.neftPaymentForm.value["transDate"];
      this.transaction.remarks = this.neftPaymentForm.value["remark"];
      this.transactionService.initiateTransaction(this.transaction).subscribe(t=>console.log(t));
      this.router.navigateByUrl('/transfersuccessful');
    }
  }
  onReset()
  {
    this.submitted=false;
    this.neftPaymentForm.reset();
  }
}
