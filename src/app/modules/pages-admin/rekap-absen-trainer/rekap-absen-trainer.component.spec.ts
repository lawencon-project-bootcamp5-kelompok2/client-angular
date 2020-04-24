import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekapAbsenTrainerComponent } from './rekap-absen-trainer.component';

describe('RekapAbsenTrainerComponent', () => {
  let component: RekapAbsenTrainerComponent;
  let fixture: ComponentFixture<RekapAbsenTrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekapAbsenTrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekapAbsenTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
