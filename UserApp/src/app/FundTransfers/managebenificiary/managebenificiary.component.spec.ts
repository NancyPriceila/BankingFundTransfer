import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagebenificiaryComponent } from './managebenificiary.component';

describe('ManagebenificiaryComponent', () => {
  let component: ManagebenificiaryComponent;
  let fixture: ComponentFixture<ManagebenificiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagebenificiaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagebenificiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
