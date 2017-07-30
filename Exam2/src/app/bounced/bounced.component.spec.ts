import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BouncedComponent } from './bounced.component';

describe('BouncedComponent', () => {
  let component: BouncedComponent;
  let fixture: ComponentFixture<BouncedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BouncedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BouncedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
