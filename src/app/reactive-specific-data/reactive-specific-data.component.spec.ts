import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveSpecificDataComponent } from './reactive-specific-data.component';

describe('ReactiveSpecificDataComponent', () => {
  let component: ReactiveSpecificDataComponent;
  let fixture: ComponentFixture<ReactiveSpecificDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveSpecificDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveSpecificDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
