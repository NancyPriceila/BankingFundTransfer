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
      benificiaryName: ['', Validators.required],
      acntNo: ['', Validators.required],
      reacntNo: ['', [Validators.required, Validators.email]],
      saveBenificiary: [false, Validators.requiredTrue],
      nickName: ['', Validators.required]
  });
  }
  get f() { return this.addBenificiaryForm.controls; }

  saveBenificiary(){
    this.submitted=true;
  }
}
