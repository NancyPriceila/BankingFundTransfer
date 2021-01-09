export class Transaction{
    transaction_id:number;
    customer_id:number;
    transaction_type:string;
    from_account:number;
    to_account:number;
    from_Account_balance:number;
    to_Account_balance:number;
    amount:number;
    transaction_date:Date;
    remarks:string;
    constructor(transaction_id:number=0,customer_id:number=0,transaction_type:string="",from_account:number=0,to_account:number=0,
        from_Account_balance:number=0,to_Account_balance:number=0,amount:number=0,transaction_date:Date=new Date("0000/00/00"),remarks:string=""){
    this.transaction_id=transaction_id;
    this.customer_id=customer_id;
    this.transaction_type=transaction_type;
    this.from_account=from_account;
    this.to_account=to_account;
    this.from_Account_balance=from_Account_balance;
    this.to_Account_balance=to_Account_balance;
    this.amount=amount;
    this.transaction_date=transaction_date;
    this.remarks=remarks;
    }
}