import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPertemuanComponent } from './edit-pertemuan.component';

describe('EditPertemuanComponent', () => {
  let component: EditPertemuanComponent;
  let fixture: ComponentFixture<EditPertemuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPertemuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPertemuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
