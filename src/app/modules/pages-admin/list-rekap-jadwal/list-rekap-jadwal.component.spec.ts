import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRekapJadwalComponent } from './list-rekap-jadwal.component';

describe('ListRekapJadwalComponent', () => {
  let component: ListRekapJadwalComponent;
  let fixture: ComponentFixture<ListRekapJadwalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRekapJadwalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRekapJadwalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
