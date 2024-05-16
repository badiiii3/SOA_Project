import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCadreComponent } from './edit-cadre.component';

describe('EditCadreComponent', () => {
  let component: EditCadreComponent;
  let fixture: ComponentFixture<EditCadreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCadreComponent]
    });
    fixture = TestBed.createComponent(EditCadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
