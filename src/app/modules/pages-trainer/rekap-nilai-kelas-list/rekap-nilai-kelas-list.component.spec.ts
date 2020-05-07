import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekapNilaiKelasListComponent } from './rekap-nilai-kelas-list.component';

describe('RekapNilaiKelasListComponent', () => {
  let component: RekapNilaiKelasListComponent;
  let fixture: ComponentFixture<RekapNilaiKelasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekapNilaiKelasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekapNilaiKelasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
