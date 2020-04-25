import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonalComponentComponent } from './testimonal-component.component';

describe('TestimonalComponentComponent', () => {
  let component: TestimonalComponentComponent;
  let fixture: ComponentFixture<TestimonalComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonalComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
