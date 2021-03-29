import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../services/http-service.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-betaal',
  templateUrl: './student-betaal.component.html',
  styleUrls: ['./student-betaal.component.css']
})
export class StudentBetaalComponent implements OnInit {

  students: Student[];

  constructor(private httpService: HttpServiceService) { }

  addStudent(name: string, owed: number): void {
    name = name.trim();
    if (!name) { return; }
    this.httpService.addStudent({ name, owed } as Student)
      .subscribe(hero => {
        this.students.push(hero);
      });
  }

  getStudents(): void{
    this.httpService.getStudents().subscribe(students => this.students = students);
  }

  ngOnInit(): void {
    this.getStudents();
  }


}
