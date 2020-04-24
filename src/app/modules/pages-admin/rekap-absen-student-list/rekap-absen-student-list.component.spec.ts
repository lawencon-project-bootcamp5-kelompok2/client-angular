import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekapAbsenStudentListComponent } from './rekap-absen-student-list.component';

describe('RekapAbsenStudentListComponent', () => {
  let component: RekapAbsenStudentListComponent;
  let fixture: ComponentFixture<RekapAbsenStudentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekapAbsenStudentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekapAbsenStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
