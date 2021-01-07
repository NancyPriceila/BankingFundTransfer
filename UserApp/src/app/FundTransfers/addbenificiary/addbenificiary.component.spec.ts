import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbenificiaryComponent } from './addbenificiary.component';

describe('AddbenificiaryComponent', () => {
  let component: AddbenificiaryComponent;
  let fixture: ComponentFixture<AddbenificiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbenificiaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbenificiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
