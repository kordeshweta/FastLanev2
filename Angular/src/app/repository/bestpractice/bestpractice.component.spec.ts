import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestpracticeComponent } from './bestpractice.component';

describe('BestpracticeComponent', () => {
  let component: BestpracticeComponent;
  let fixture: ComponentFixture<BestpracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestpracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
