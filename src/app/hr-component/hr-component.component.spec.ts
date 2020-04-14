import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrComponentComponent } from './hr-component.component';

describe('HrComponentComponent', () => {
  let component: HrComponentComponent;
  let fixture: ComponentFixture<HrComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
