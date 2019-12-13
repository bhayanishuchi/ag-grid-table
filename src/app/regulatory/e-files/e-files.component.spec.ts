import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EFilesComponent } from './e-files.component';

describe('EFilesComponent', () => {
  let component: EFilesComponent;
  let fixture: ComponentFixture<EFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
