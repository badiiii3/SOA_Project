import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsHomeComponent } from './ens-home.component';

describe('EnsHomeComponent', () => {
  let component: EnsHomeComponent;
  let fixture: ComponentFixture<EnsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnsHomeComponent]
    });
    fixture = TestBed.createComponent(EnsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
