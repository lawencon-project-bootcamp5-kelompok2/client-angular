import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcourseAddComponent } from './subcourse-add.component';

describe('SubcourseAddComponent', () => {
  let component: SubcourseAddComponent;
  let fixture: ComponentFixture<SubcourseAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcourseAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcourseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
