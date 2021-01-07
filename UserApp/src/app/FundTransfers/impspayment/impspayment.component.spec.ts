import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpspaymentComponent } from './impspayment.component';

describe('ImpspaymentComponent', () => {
  let component: ImpspaymentComponent;
  let fixture: ComponentFixture<ImpspaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpspaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpspaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
