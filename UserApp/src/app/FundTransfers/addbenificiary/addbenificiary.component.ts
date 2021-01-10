import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addbenificiary',
  templateUrl: './addbenificiary.component.html',
  styleUrls: ['./addbenificiary.component.css']
})
export class AddbenificiaryComponent implements OnInit {
  addBeneficiaryForm:FormGroup=new FormGroup({});
  submitted = false;
  constructor(private formBuilder: FormBuilder) { 
    
  }
  
  ngOnInit(): void {
    this.addBeneficiaryForm = this.formBuilder.group({
      beneficiaryName: ['', [Validators.required,Validators.pattern("^[A-Za-z]{1,}$")]],
      acntNo: ['', [Validators.required,Validators.pattern("^[0-9]{8,15}$")]],
      reacntNo: ['', Validators.required],
      saveBeneficiary: [false, Validators.requiredTrue],
      nickName: ['', Validators.pattern("^[a-zA-Z]{1,}$")]
  });
  }
  get f() { return this.addBeneficiaryForm.controls; }

  saveBeneficiary(){
    this.submitted=true;
  }
}
