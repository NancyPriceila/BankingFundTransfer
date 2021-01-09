import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Transaction } from '../transaction.module';

@Injectable()
export class TransactionService{
    constructor(private httpClient:HttpClient){}
    public initiateTransaction(transaction:Transaction){
        return this.httpClient.post("http://localhost:57540/api/Transaction",transaction);
    }
    public getTransaction(id:number){
        return this.httpClient.get("http://localhost:57540/api/Transaction/"+id);
    }
}
