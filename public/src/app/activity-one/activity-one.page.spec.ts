import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityOnePage } from './activity-one.page';

describe('ActivityOnePage', () => {
  let component: ActivityOnePage;
  let fixture: ComponentFixture<ActivityOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
