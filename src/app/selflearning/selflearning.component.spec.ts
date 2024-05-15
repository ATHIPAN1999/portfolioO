import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelflearningComponent } from './selflearning.component';

describe('SelflearningComponent', () => {
  let component: SelflearningComponent;
  let fixture: ComponentFixture<SelflearningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelflearningComponent]
    });
    fixture = TestBed.createComponent(SelflearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
