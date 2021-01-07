import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtgspaymentComponent } from './rtgspayment.component';

describe('RtgspaymentComponent', () => {
  let component: RtgspaymentComponent;
  let fixture: ComponentFixture<RtgspaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtgspaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtgspaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
