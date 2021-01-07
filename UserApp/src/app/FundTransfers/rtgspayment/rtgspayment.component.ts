import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rtgspayment',
  templateUrl: './rtgspayment.component.html',
  styleUrls: ['./rtgspayment.component.css']
})
export class RtgspaymentComponent implements OnInit {
  rtgsPaymentForm:FormGroup=new FormGroup({});
  submitted = false;

  constructor(private formBuilder:FormBuilder,private router:Router) { }

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

    // this.router.navigateByUrl('/transfersuccessful');
  }
  onReset()
  {
    this.submitted=false;
    this.rtgsPaymentForm.reset();
  }

}
