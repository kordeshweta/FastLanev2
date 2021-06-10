import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCheckAllComponent } from './select-check-all.component';

describe('SelectCheckAllComponent', () => {
  let component: SelectCheckAllComponent;
  let fixture: ComponentFixture<SelectCheckAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCheckAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCheckAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
