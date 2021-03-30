import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBetaalComponent } from './student-betaal.component';

describe('StudentBetaalComponent', () => {
  let component: StudentBetaalComponent;
  let fixture: ComponentFixture<StudentBetaalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentBetaalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBetaalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
