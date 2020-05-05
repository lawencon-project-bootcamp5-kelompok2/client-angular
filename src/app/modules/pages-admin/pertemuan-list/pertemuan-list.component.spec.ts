import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PertemuanListComponent } from './pertemuan-list.component';

describe('PertemuanListComponent', () => {
  let component: PertemuanListComponent;
  let fixture: ComponentFixture<PertemuanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PertemuanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PertemuanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
