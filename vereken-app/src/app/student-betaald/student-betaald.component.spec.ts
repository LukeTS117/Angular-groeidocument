import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBetaaldComponent } from './student-betaald.component';

describe('StudentBetaaldComponent', () => {
  let component: StudentBetaaldComponent;
  let fixture: ComponentFixture<StudentBetaaldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentBetaaldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBetaaldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
