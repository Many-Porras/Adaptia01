import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Service01Component } from './service01.component';

describe('Service01Component', () => {
  let component: Service01Component;
  let fixture: ComponentFixture<Service01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Service01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Service01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
