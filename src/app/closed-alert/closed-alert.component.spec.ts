import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedAlertComponent } from './closed-alert.component';

describe('ClosedAlertComponent', () => {
  let component: ClosedAlertComponent;
  let fixture: ComponentFixture<ClosedAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
