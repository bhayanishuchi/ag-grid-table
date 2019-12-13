import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SarRegulatoryComponent } from './sar-regulatory.component';

describe('SarRegulatoryComponent', () => {
  let component: SarRegulatoryComponent;
  let fixture: ComponentFixture<SarRegulatoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SarRegulatoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SarRegulatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
