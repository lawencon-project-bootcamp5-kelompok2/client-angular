import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReportNilaiSubcourseStudentComponent } from './list-report-nilai-subcourse-student.component';

describe('ListReportNilaiSubcourseStudentComponent', () => {
  let component: ListReportNilaiSubcourseStudentComponent;
  let fixture: ComponentFixture<ListReportNilaiSubcourseStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReportNilaiSubcourseStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReportNilaiSubcourseStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
