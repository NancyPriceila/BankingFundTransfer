import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionfailedComponent } from './transactionfailed.component';

describe('TransactionfailedComponent', () => {
  let component: TransactionfailedComponent;
  let fixture: ComponentFixture<TransactionfailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionfailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionfailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
