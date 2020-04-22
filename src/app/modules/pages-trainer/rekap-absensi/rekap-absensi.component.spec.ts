import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekapAbsensiComponent } from './rekap-absensi.component';

describe('RekapAbsensiComponent', () => {
  let component: RekapAbsensiComponent;
  let fixture: ComponentFixture<RekapAbsensiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekapAbsensiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekapAbsensiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
