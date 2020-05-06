import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PertemuanDetailComponent } from './pertemuan-detail.component';

describe('PertemuanDetailComponent', () => {
  let component: PertemuanDetailComponent;
  let fixture: ComponentFixture<PertemuanDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PertemuanDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PertemuanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
