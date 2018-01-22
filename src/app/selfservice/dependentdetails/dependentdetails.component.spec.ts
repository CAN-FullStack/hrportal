import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentdetailsComponent } from './dependentdetails.component';

describe('DependentdetailsComponent', () => {
  let component: DependentdetailsComponent;
  let fixture: ComponentFixture<DependentdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependentdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
