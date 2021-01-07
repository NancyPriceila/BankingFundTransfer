import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfersuccessfulComponent } from './transfersuccessful.component';

describe('TransfersuccessfulComponent', () => {
  let component: TransfersuccessfulComponent;
  let fixture: ComponentFixture<TransfersuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfersuccessfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfersuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
