import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiledCasesComponent } from './filed-cases.component';

describe('FiledCasesComponent', () => {
  let component: FiledCasesComponent;
  let fixture: ComponentFixture<FiledCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiledCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiledCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
