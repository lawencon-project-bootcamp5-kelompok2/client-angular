import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPertemuanComponent } from './add-pertemuan.component';

describe('AddPertemuanComponent', () => {
  let component: AddPertemuanComponent;
  let fixture: ComponentFixture<AddPertemuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPertemuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPertemuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
