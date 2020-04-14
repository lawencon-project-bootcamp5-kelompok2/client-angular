import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PembelajaranComponent} from './pembelajaran.component';

describe('PembelajaranComponent', () => {
  let component: PembelajaranComponent;
  let fixture: ComponentFixture<PembelajaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PembelajaranComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PembelajaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
