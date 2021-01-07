import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-neftpayment',
  templateUrl: './neftpayment.component.html',
  styleUrls: ['./neftpayment.component.css']
})
export class NeftpaymentComponent implements OnInit {
  neftPaymentForm:FormGroup=new FormGroup({});
  submitted = false;

  constructor(private formBuilder:FormBuilder,private router:Router) { }

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

    // this.router.navigateByUrl('/transfersuccessful');
  }
  onReset()
  {
    this.submitted=false;
    this.neftPaymentForm.reset();
  }
}
