import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekapJadwalComponent } from './rekap-jadwal.component';

describe('RekapJadwalComponent', () => {
  let component: RekapJadwalComponent;
  let fixture: ComponentFixture<RekapJadwalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekapJadwalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekapJadwalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
