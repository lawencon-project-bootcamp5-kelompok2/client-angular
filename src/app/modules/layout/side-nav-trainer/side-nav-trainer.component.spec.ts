import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavTrainerComponent } from './side-nav-trainer.component';

describe('SideNavTrainerComponent', () => {
  let component: SideNavTrainerComponent;
  let fixture: ComponentFixture<SideNavTrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavTrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
