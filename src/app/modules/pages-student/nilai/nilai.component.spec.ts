import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NilaiComponent} from './nilai.component';

describe('NilaiComponent', () => {
  let component: NilaiComponent;
  let fixture: ComponentFixture<NilaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NilaiComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NilaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
