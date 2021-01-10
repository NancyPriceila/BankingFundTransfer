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
  notAdded = false;
  transaction:Transaction;
  message:string="";

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
    this.notAdded = false;
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
      this.transactionService.initiateTransaction(this.transaction).subscribe(t=>
        {
          console.log(t);
          this.router.navigateByUrl('/transfersuccessful/'+this.transaction.from_account);
        },
      error=>{
        this.message=error.error.Message;
        if(this.message=="Your transaction failed due to insufficient balance. Please try again."){
          console.log(this.message);
          this.router.navigateByUrl('/transactionfailed/'+this.message+'/'+"RTGS");
        }
        else{
          if(this.message=="Beneficiary Account Number not added"){
            console.log(this.message);
            this.notAdded=true;
          }
          else{
            if(this.message=="Something Went Wrong. Unable to process your transaction. Please try again."){
              console.log(this.message);
              this.router.navigateByUrl('/transactionfailed/'+this.message+'/'+"RTGS");
            }
          }
        }
      });
    }
  }
  onReset()
  {
    this.submitted=false;
    this.rtgsPaymentForm.reset();
  }

}
