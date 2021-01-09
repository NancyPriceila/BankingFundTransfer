import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/models/services/transaction.service';
import { Transaction } from 'src/app/models/transaction.module';

@Component({
  selector: 'app-rtgspayment',
  templateUrl: './rtgspayment.component.html',
  styleUrls: ['./rtgspayment.component.css']
})
export class RtgspaymentComponent implements OnInit {
  rtgsPaymentForm:FormGroup=new FormGroup({});
  submitted = false;
  transaction:Transaction;

  constructor(private formBuilder:FormBuilder,private router:Router,private transactionService:TransactionService) {
    this.transaction=new Transaction();
   }

  ngOnInit(): void {
    this.rtgsPaymentForm = this.formBuilder.group({
      fromAccount: ['', Validators.required],
      toAccount: ['', Validators.required],
      amount: ['', Validators.required],
      transDate: ['',Validators.required],
      remark: ['', Validators.required]
  });
  }
  get f() { return this.rtgsPaymentForm.controls; }
  initiatePayment(){
    this.submitted = true;
    if(this.rtgsPaymentForm.invalid){
      return;
    }
    else{
      this.transaction.transaction_type="RTGS";
      this.transaction.from_account = this.rtgsPaymentForm.value["fromAccount"];
      this.transaction.to_account = this.rtgsPaymentForm.value["toAccount"]
      this.transaction.amount = this.rtgsPaymentForm.value["amount"];
      this.transaction.transaction_date = this.rtgsPaymentForm.value["transDate"];
      this.transaction.remarks = this.rtgsPaymentForm.value["remark"];
      this.transactionService.initiateTransaction(this.transaction).subscribe(t=>console.log(t));
      this.router.navigateByUrl('/transfersuccessful');
    }
  }
  onReset()
  {
    this.submitted=false;
    this.rtgsPaymentForm.reset();
  }

}
