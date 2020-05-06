import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekapAbsensiPertemuanListComponent } from './rekap-absensi-pertemuan-list.component';

describe('RekapAbsensiPertemuanListComponent', () => {
  let component: RekapAbsensiPertemuanListComponent;
  let fixture: ComponentFixture<RekapAbsensiPertemuanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekapAbsensiPertemuanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekapAbsensiPertemuanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
