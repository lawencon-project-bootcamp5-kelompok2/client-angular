import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PertemuanComponent } from './pertemuan.component';

describe('PertemuanComponent', () => {
  let component: PertemuanComponent;
  let fixture: ComponentFixture<PertemuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PertemuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PertemuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
