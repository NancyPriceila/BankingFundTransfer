import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbenificiariesComponent } from './listbenificiaries.component';

describe('ListbenificiariesComponent', () => {
  let component: ListbenificiariesComponent;
  let fixture: ComponentFixture<ListbenificiariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListbenificiariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbenificiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
