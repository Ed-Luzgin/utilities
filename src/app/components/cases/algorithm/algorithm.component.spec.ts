import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmComponent } from './algorithm.component';

describe('AlgorithmComponent', () => {
  let component: AlgorithmComponent;
  let fixture: ComponentFixture<AlgorithmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlgorithmComponent]
    });
    fixture = TestBed.createComponent(AlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
