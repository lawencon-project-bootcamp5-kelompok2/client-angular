import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRekapClassComponent } from './list-rekap-class.component';

describe('ListRekapClassComponent', () => {
  let component: ListRekapClassComponent;
  let fixture: ComponentFixture<ListRekapClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRekapClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRekapClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
