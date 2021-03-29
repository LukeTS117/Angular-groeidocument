import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../services/http-service.service';
import { Student } from 'src/app/student';
import { EventHandlerService } from '../services/event-handler.service';

@Component({
  selector: 'app-student-betaald',
  templateUrl: './student-betaald.component.html',
  styleUrls: ['./student-betaald.component.css']
})
export class StudentBetaaldComponent implements OnInit {
  students: Student[];

  constructor(private httpService: HttpServiceService,
    private eventHandler: EventHandlerService) {}

  ngOnInit(): void {
    this.getStudents();
    this.eventHandler.$reloadEvent.subscribe(data => this.getStudents());
  }

  getStudents(): void{
    this.httpService.getStudents().subscribe(students => this.students = students);
  }
}
