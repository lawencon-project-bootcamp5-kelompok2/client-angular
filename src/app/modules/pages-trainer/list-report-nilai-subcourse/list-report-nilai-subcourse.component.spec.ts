import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReportNilaiSubcourseComponent } from './list-report-nilai-subcourse.component';

describe('ListReportNilaiSubcourseComponent', () => {
  let component: ListReportNilaiSubcourseComponent;
  let fixture: ComponentFixture<ListReportNilaiSubcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReportNilaiSubcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReportNilaiSubcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
