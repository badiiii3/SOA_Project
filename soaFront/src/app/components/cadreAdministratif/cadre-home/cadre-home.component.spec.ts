import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadreHomeComponent } from './cadre-home.component';

describe('CadreHomeComponent', () => {
  let component: CadreHomeComponent;
  let fixture: ComponentFixture<CadreHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadreHomeComponent]
    });
    fixture = TestBed.createComponent(CadreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
