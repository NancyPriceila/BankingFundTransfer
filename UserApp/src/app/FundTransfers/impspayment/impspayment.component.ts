import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-impspayment',
  templateUrl: './impspayment.component.html',
  styleUrls: ['./impspayment.component.css']
})
export class ImpspaymentComponent implements OnInit {
  impsPaymentForm:FormGroup=new FormGroup({});
  submitted = false;

  constructor(private formBuilder:FormBuilder,private router:Router) { }

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

    // this.router.navigateByUrl('/transfersuccessful');
  }
  onReset()
  {
    this.submitted=false;
    this.impsPaymentForm.reset();
  }
}
