import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbenificiaryComponent } from './FundTransfers/addbenificiary/addbenificiary.component';
import { FundtransferComponent } from './FundTransfers/fundtransfer/fundtransfer.component';
import { ImpspaymentComponent } from './FundTransfers/impspayment/impspayment.component';
import { NeftpaymentComponent } from './FundTransfers/neftpayment/neftpayment.component';
import { RtgspaymentComponent } from './FundTransfers/rtgspayment/rtgspayment.component';
import { TransfersuccessfulComponent } from './FundTransfers/transfersuccessful/transfersuccessful.component';

const routes: Routes = [
  {path:"",component:FundtransferComponent},
  {path:"fundtransfer",component:FundtransferComponent},
  {path:"addbenificiary",component:AddbenificiaryComponent},
  {path:"impspayment",component:ImpspaymentComponent},
  {path:"neftpayment",component:NeftpaymentComponent},
  {path:"rtgspayment",component:RtgspaymentComponent},
  {path:"transfersuccessful",component:TransfersuccessfulComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
