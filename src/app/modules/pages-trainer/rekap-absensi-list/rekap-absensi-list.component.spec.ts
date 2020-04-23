import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekapAbsensiListComponent } from './rekap-absensi-list.component';

describe('RekapAbsensiListComponent', () => {
  let component: RekapAbsensiListComponent;
  let fixture: ComponentFixture<RekapAbsensiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekapAbsensiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekapAbsensiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
