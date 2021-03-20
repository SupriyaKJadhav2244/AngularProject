import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondChildPageComponent } from './second-child-page.component';

describe('SecondChildPageComponent', () => {
  let component: SecondChildPageComponent;
  let fixture: ComponentFixture<SecondChildPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondChildPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondChildPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
