import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableAlertComponent } from './available-alert.component';

describe('AvailableAlertComponent', () => {
  let component: AvailableAlertComponent;
  let fixture: ComponentFixture<AvailableAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
