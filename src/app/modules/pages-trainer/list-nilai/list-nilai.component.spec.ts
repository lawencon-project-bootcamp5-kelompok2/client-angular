import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNilaiComponent } from './list-nilai.component';

describe('ListNilaiComponent', () => {
  let component: ListNilaiComponent;
  let fixture: ComponentFixture<ListNilaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNilaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNilaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
