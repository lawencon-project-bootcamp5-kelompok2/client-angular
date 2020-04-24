import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekapNilaiListComponent } from './rekap-nilai-list.component';

describe('RekapNilaiListComponent', () => {
  let component: RekapNilaiListComponent;
  let fixture: ComponentFixture<RekapNilaiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekapNilaiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekapNilaiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
