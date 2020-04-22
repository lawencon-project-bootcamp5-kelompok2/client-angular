import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMateriComponent } from './add-materi.component';

describe('AddMateriComponent', () => {
  let component: AddMateriComponent;
  let fixture: ComponentFixture<AddMateriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMateriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMateriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
