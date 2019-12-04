import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppressedAlertComponent } from './suppressed-alert.component';

describe('SuppressedAlertComponent', () => {
  let component: SuppressedAlertComponent;
  let fixture: ComponentFixture<SuppressedAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppressedAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppressedAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
