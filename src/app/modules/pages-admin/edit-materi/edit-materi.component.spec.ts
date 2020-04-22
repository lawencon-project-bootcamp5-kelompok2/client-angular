import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMateriComponent } from './edit-materi.component';

describe('EditMateriComponent', () => {
  let component: EditMateriComponent;
  let fixture: ComponentFixture<EditMateriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMateriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMateriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
