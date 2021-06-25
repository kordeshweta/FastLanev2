import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxParametersComponent } from './ux-parameters.component';

describe('UxParametersComponent', () => {
  let component: UxParametersComponent;
  let fixture: ComponentFixture<UxParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
