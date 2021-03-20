import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdChildComponent } from './third-child.component';

describe('ThirdChildComponent', () => {
  let component: ThirdChildComponent;
  let fixture: ComponentFixture<ThirdChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
