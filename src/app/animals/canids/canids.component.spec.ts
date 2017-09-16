import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanidsComponent } from './canids.component';

describe('CanidsComponent', () => {
  let component: CanidsComponent;
  let fixture: ComponentFixture<CanidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
