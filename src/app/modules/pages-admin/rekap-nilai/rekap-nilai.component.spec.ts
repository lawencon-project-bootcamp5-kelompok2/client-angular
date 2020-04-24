import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekapNilaiComponent } from './rekap-nilai.component';

describe('RekapNilaiComponent', () => {
  let component: RekapNilaiComponent;
  let fixture: ComponentFixture<RekapNilaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekapNilaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekapNilaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
