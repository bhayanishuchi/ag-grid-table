import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAlertComponent } from './detail-alert.component';

describe('DetailAlertComponent', () => {
  let component: DetailAlertComponent;
  let fixture: ComponentFixture<DetailAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
