import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekapAbsenTrainerListComponent } from './rekap-absen-trainer-list.component';

describe('RekapAbsenTrainerListComponent', () => {
  let component: RekapAbsenTrainerListComponent;
  let fixture: ComponentFixture<RekapAbsenTrainerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekapAbsenTrainerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekapAbsenTrainerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
