import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekapAbsenStudentComponent } from './rekap-absen-student.component';

describe('RekapAbsenStudentComponent', () => {
  let component: RekapAbsenStudentComponent;
  let fixture: ComponentFixture<RekapAbsenStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekapAbsenStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekapAbsenStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
