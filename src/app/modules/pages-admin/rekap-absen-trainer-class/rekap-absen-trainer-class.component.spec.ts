import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekapAbsenTrainerClassComponent } from './rekap-absen-trainer-class.component';

describe('RekapAbsenTrainerClassComponent', () => {
  let component: RekapAbsenTrainerClassComponent;
  let fixture: ComponentFixture<RekapAbsenTrainerClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekapAbsenTrainerClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekapAbsenTrainerClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
