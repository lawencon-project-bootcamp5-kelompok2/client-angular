import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAbsenComponent } from './list-absen.component';

describe('ListAbsenComponent', () => {
  let component: ListAbsenComponent;
  let fixture: ComponentFixture<ListAbsenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAbsenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAbsenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
