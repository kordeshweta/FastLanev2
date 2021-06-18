import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceleratorsComponent } from './accelerators.component';

describe('AcceleratorsComponent', () => {
  let component: AcceleratorsComponent;
  let fixture: ComponentFixture<AcceleratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceleratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceleratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
