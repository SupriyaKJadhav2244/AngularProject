import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstModulePageComponent } from './first-module-page.component';

describe('FirstModulePageComponent', () => {
  let component: FirstModulePageComponent;
  let fixture: ComponentFixture<FirstModulePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstModulePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstModulePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
