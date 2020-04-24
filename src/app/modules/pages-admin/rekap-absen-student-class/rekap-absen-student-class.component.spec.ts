import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekapAbsenStudentClassComponent } from './rekap-absen-student-class.component';

describe('RekapAbsenStudentClassComponent', () => {
  let component: RekapAbsenStudentClassComponent;
  let fixture: ComponentFixture<RekapAbsenStudentClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekapAbsenStudentClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekapAbsenStudentClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
