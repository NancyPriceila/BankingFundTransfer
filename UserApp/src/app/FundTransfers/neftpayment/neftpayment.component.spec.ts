import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeftpaymentComponent } from './neftpayment.component';

describe('NeftpaymentComponent', () => {
  let component: NeftpaymentComponent;
  let fixture: ComponentFixture<NeftpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeftpaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeftpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
