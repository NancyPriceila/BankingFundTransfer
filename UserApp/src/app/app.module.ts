import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule,FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { AddbenificiaryComponent } from './FundTransfers/addbenificiary/addbenificiary.component';
import { ImpspaymentComponent } from './FundTransfers/impspayment/impspayment.component';
import { NeftpaymentComponent } from './FundTransfers/neftpayment/neftpayment.component';
import { RtgspaymentComponent } from './FundTransfers/rtgspayment/rtgspayment.component';
import { TransfersuccessfulComponent } from './FundTransfers/transfersuccessful/transfersuccessful.component';
import { FundtransferComponent } from './FundTransfers/fundtransfer/fundtransfer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManagebenificiaryComponent } from './FundTransfers/managebenificiary/managebenificiary.component';
import { ListbenificiariesComponent } from './FundTransfers/listbenificiaries/listbenificiaries.component';

@NgModule({
  declarations: [
    AppComponent,
    AddbenificiaryComponent,
    ImpspaymentComponent,
    NeftpaymentComponent,
    RtgspaymentComponent,
    TransfersuccessfulComponent,
    FundtransferComponent,
    ManagebenificiaryComponent,
    ListbenificiariesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule, 
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
