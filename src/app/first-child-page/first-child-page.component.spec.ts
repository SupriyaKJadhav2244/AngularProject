import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstChildPageComponent } from './first-child-page.component';

describe('FirstChildPageComponent', () => {
  let component: FirstChildPageComponent;
  let fixture: ComponentFixture<FirstChildPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstChildPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstChildPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
