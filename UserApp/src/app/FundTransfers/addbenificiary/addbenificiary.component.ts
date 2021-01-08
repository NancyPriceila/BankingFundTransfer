import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addbenificiary',
  templateUrl: './addbenificiary.component.html',
  styleUrls: ['./addbenificiary.component.css']
})
export class AddbenificiaryComponent implements OnInit {
  addBenificiaryForm:FormGroup=new FormGroup({});
  submitted = false;
  constructor(private formBuilder: FormBuilder) { 
    
  }
  
  ngOnInit(): void {
    this.addBenificiaryForm = this.formBuilder.group({
      benificiaryName: ['', [Validators.required,Validators.pattern("^[A-Za-z]{1,}$")]],
      acntNo: ['', [Validators.required,Validators.pattern("^[0-9]{8,15}$")]],
      reacntNo: ['', Validators.required],
      saveBenificiary: [false, Validators.requiredTrue],
      nickName: ['', [Validators.required,Validators.pattern("^[a-zA-Z]{1,}$")]]
  });
  }
  get f() { return this.addBenificiaryForm.controls; }

  saveBenificiary(){
    this.submitted=true;
  }
}
