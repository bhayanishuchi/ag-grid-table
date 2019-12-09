import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SarDetailComponent } from './sar-detail.component';

describe('SarDetailComponent', () => {
  let component: SarDetailComponent;
  let fixture: ComponentFixture<SarDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SarDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
