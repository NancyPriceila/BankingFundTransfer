create database dbBanking
use dbBanking


create table tblCustomers(
Reference_id int identity(1,1) primary key,
First_name varchar(30) not null,
middle_name varchar(30) not null,
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
approved_by varchar(20),
approved_date Date)

alter table tblCustomers
drop column middle_name

alter table tblCustomers
add  middle_name varchar(30)

select * from tblCustomers



--------------------------------------------------------
 create table tblBankingCustomers(
 Reference_id int references tblCustomers(Reference_id),
 customer_id int identity(1000,1) primary key,
 account_number int not null unique,
account_OpenDate Date
)


create table tblNetBanking(
user_id int references tblBankingCustomers(customer_id),
account_number int not null unique,
password varchar(15) not null unique,
transaction_password varchar(15) not null unique)

create table tblTransactions(
transaction_id int identity(100,1) primary key,
customer_id int references tblBankingCustomers(customer_id),
transaction_type varchar(10),
from_account int,
to_account int,
transaction_date Date,
remarks text)

create table tblBalance(
customer_id int references tblBankingCustomers(customer_id),
account_number int unique,
account_type varchar(20),
Name varchar(40),
balance float default 500.00)


create table tblBeneficiaries(
beneficiary_id int identity(10,1) primary key,
account_number int,
beneficiary_account_number int,
 nickname varchar(20)
)

create table tblLocked(
user_id int references tblBankingCustomers(customer_id),
account_number int unique)


alter table tblBeneficiaries
add foreign key(account_number) references tblBankingCustomers(account_number)


alter table tblTransactions
add  from_Account_balance float

alter table tblTransactions
add  to_Account_balance float

alter table tblTransactions
add  amount float


create table tbladmin(
admin_id varchar(20) primary key,
password varchar(15) not null unique)

alter table tblCustomers
add foreign key(approved_by) references tbladmin(admin_id)

sp_help tblCustomers