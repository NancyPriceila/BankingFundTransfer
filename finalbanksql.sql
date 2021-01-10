create database dbBank
use dbBank


create table tblCustomers(
Reference_id int identity(1,1) primary key,
First_name varchar(30) not null,
middle_name varchar(30) ,
Last_name varchar(30) not null,
Father_name varchar(30) not null,
mobile_number varchar(15) not null,
email_id varchar(40) not null,
account_type varchar(20) not null,
aadhar_number varchar(16) not null,
date_of_birth Date not null,
age int not null,
gender varchar(10) check(gender in('female','male','prefer not to say')),
Residential_address varchar(100) not null,
permanent_address varchar(100) not null,
occupation_Type varchar(30) not null,
source_of_income varchar(30) not null,
gross_income float not null,
account_OpenDate Date,
approved_status varchar(10),
approved_by varchar(20) references tbladmin(admin_id),
approved_date Date)
select * from tblCustomers

--------------------------------
create table tblBankingCustomers(
 Reference_id int references tblCustomers(Reference_id),
 customer_id int identity(1000,1) primary key,
 account_number int not null unique,
account_OpenDate Date
)
select * from tblBankingCustomers
insert into tblBankingCustomers(Reference_id,account_number,account_OpenDate) values(2,25423564,'2020/02/03')
insert into tblBankingCustomers(Reference_id,account_number,account_OpenDate) values(3,35436332,'2020/02/03')
insert into tblBankingCustomers(Reference_id,account_number,account_OpenDate) values(4,66576476,'2020/02/03')
insert into tblBankingCustomers(Reference_id,account_number,account_OpenDate) values(5,76454455,'2020/02/03')
insert into tblBankingCustomers(Reference_id,account_number,account_OpenDate) values(6,43657665,'2020/02/03')


create table tblNetBanking(
user_id int references tblBankingCustomers(customer_id),
account_number int not null unique,
password varchar(15) not null unique,
transaction_password varchar(15) not null unique)



alter table tblNetBanking add primary key(account_number) 


create table tblTransactions(
transaction_id int identity(100,1) primary key,
customer_id int references tblBankingCustomers(customer_id),
transaction_type varchar(10),
from_account int,
to_account int,
from_Account_balance float,
to_Account_balance float,
 amount float,
transaction_date Date,
remarks text)
select * from tblTransactions
select * from tblBalance
truncate table tblTransactions 
insert into tblTransactions values(1000,'IMPS',25423564,35436332,40000,40000,5000,'2021/04/04','abc')
insert into tblTransactions values(1000,'RTGS',25423564,66576476,35000,40000,5000,'2021/04/04','def')
insert into tblTransactions values(1001,'IMPS',35436332,66576476,35000,45000,5000,'2021/04/04','ghi')
insert into tblTransactions values(1001,'NEFT',35436332,76454455,30000,40000,5000,'2021/04/04','jkl')
insert into tblTransactions values(1002,'RTGS',66576476,43657665,40000,40000,5000,'2021/04/04','mno')

sp_help tblTransactions
alter table tblTransactions
drop constraint PK__tblTrans__85C600AFEA2FEF83

alter table tblTransactions
drop column transaction_id

alter table tblTransactions
add transaction_id int identity(10000000,1) primary key

create proc sp_DisplayTransaction(@trans_id int)
as
begin
	select transaction_id,transaction_type,to_account,amount,from_account,transaction_date,remarks 
	from tblTransactions where transaction_id=@trans_id
end
drop procedure sp_DisplayTransaction

create proc sp_SelectTransactionId(@acnt_no int)
as
begin
	select max(transaction_id) from tblTransactions where from_account=@acnt_no
end


alter procedure sp_transact(@cust_id int,@mode varchar(5),@from_acnt int,@to_acnt int,@from_acnt_bal float,@to_acnt_bal float,@amount float,@trans_date Date,@remarks varchar(100))
as begin
begin tran
insert into tblTransactions values(@cust_id,@mode,@from_acnt,@to_acnt,@from_acnt_bal,@to_acnt_bal,@amount,@trans_date,@remarks)
update tblBalance set balance=@from_acnt_bal where account_number=@from_acnt
update tblBalance set balance=@to_acnt_bal where account_number=@to_acnt
Commit tran
end

exec sp_transact 1002,'RTGS',66576476,43657665,40000,40000,5000,'2021/04/04','mno'
select * from tblTransactions

create table tblBalance(
customer_id int references tblBankingCustomers(customer_id),
account_number int primary key,
account_type varchar(20),
Name varchar(40),
balance float default 500.00)
select * from tblBalance
truncate table tblBalance
insert into tblBalance values(1000,25423564,'savings','roshan',80000)
insert into tblBalance values(1001,35436332,'savings','nancy',80000)
insert into tblBalance values(1002,66576476,'savings','abc',80000)
insert into tblBalance values(1003,76454455,'savings','ghi',80000)
insert into tblBalance values(1004,43657665,'savings','mno',80000)

drop table tblBalance


create table tblBeneficiaries(
beneficiary_id int identity(10,1) primary key,
customer_id int references tblBankingCustomers(customer_id),
account_number int,
beneficiary_account_number int,
 nickname varchar(20)
)
select * from tblBeneficiaries
truncate table tblBeneficiaries
insert into tblBeneficiaries values(1001,25423564,35436332,'abcd')
insert into tblBeneficiaries values(1002,25423564,66576476,'efgh')
insert into tblBeneficiaries values(1000,35436332,25423564,'mnop')
insert into tblBeneficiaries values(1002,35436332,66576476,'qrst')
insert into tblBeneficiaries values(1003,35436332,76454455,'uvwx')
insert into tblBeneficiaries values(1004,66576476,43657665,'yzab')

create table tblLocked(
user_id int references tblBankingCustomers(customer_id),
account_number int primary key)

drop table tblLocked

insert into tblCustomers values('roshan','zameer','ali','showkar',9066673666,'roshan@gmail.com','savings','4544454534343434','1999-01-29',23,
'male','328,vallalar nagar','328,vallalar nagar','teacher','teacher',34000,'2021-01-21','approved','admin1','2021-01-23')
insert into tblCustomers values('nancy','priceila','b','showkar',9066673666,'nancy@gmail.com','savings','4544454534343434','1999-01-29',23,
'male','328,vallalar nagar','328,vallalar nagar','teacher','teacher',34000,'2021-01-21','approved','admin1','2021-01-23')
insert into tblCustomers values('abc','def','a','showkar',9066673666,'nancy@gmail.com','savings','4544454534343434','1999-01-29',23,
'male','328,vallalar nagar','328,vallalar nagar','teacher','teacher',34000,'2021-01-21','approved','admin1','2021-01-23')
insert into tblCustomers values('ghi','jkl','b','showkar',9066673666,'nancy@gmail.com','savings','4544454534343434','1999-01-29',23,
'male','328,vallalar nagar','328,vallalar nagar','teacher','teacher',34000,'2021-01-21','approved','admin1','2021-01-23')
insert into tblCustomers values('mno','pqr','c','showkar',9066673666,'nancy@gmail.com','savings','4544454534343434','1999-01-29',23,
'male','328,vallalar nagar','328,vallalar nagar','teacher','teacher',34000,'2021-01-21','approved','admin1','2021-01-23')

insert into tbladmin values('admin1','roshan')

create table tbladmin(
admin_id varchar(20) primary key,
password varchar(15) not null unique)


insert into tblCustomers(First_name,Last_name,Father_name,mobile_number,email_id,account_type,aadhar_number,
 date_of_birth,age ,gender ,Residential_address,permanent_address,occupation_Type,source_of_income,
 gross_income ,account_OpenDate ,approved_by ,approved_date) values('divya','kalwal','narsing','8639800091','divya@gmail.com',
 'savings','')

 sp_help tblNetbanking