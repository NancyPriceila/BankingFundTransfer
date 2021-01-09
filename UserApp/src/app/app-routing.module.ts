import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbenificiaryComponent } from './FundTransfers/addbenificiary/addbenificiary.component';
import { FundtransferComponent } from './FundTransfers/fundtransfer/fundtransfer.component';
import { ImpspaymentComponent } from './FundTransfers/impspayment/impspayment.component';
import { ListbenificiariesComponent } from './FundTransfers/listbenificiaries/listbenificiaries.component';
import { ManagebenificiaryComponent } from './FundTransfers/managebenificiary/managebenificiary.component';
import { NeftpaymentComponent } from './FundTransfers/neftpayment/neftpayment.component';
import { RtgspaymentComponent } from './FundTransfers/rtgspayment/rtgspayment.component';
import { TransfersuccessfulComponent } from './FundTransfers/transfersuccessful/transfersuccessful.component';

const routes: Routes = [
  {path:"",component:FundtransferComponent},
  {path:"fundtransfer",component:FundtransferComponent},
  {path:"managebenificiary",component:ManagebenificiaryComponent},
  {path:"addbenificiary",component:AddbenificiaryComponent},
  {path:"listbeneficiaries",component:ListbenificiariesComponent},
  {path:"impspayment",component:ImpspaymentComponent},
  {path:"neftpayment",component:NeftpaymentComponent},
  {path:"rtgspayment",component:RtgspaymentComponent},
  {path:"transfersuccessful/:id",component:TransfersuccessfulComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
