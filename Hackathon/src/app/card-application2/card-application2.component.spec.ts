import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardApplication2Component } from './card-application2.component';

describe('CardApplication2Component', () => {
  let component: CardApplication2Component;
  let fixture: ComponentFixture<CardApplication2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardApplication2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardApplication2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
