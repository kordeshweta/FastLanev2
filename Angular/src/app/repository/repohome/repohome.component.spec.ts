import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepohomeComponent } from './repohome.component';

describe('RepohomeComponent', () => {
  let component: RepohomeComponent;
  let fixture: ComponentFixture<RepohomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepohomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
