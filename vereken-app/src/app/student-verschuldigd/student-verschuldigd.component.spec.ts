import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentVerschuldigdComponent } from './student-verschuldigd.component';

describe('StudentVerschuldigdComponent', () => {
  let component: StudentVerschuldigdComponent;
  let fixture: ComponentFixture<StudentVerschuldigdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentVerschuldigdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentVerschuldigdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
