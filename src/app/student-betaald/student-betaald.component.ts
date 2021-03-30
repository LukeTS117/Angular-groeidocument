import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../services/http-service.service';
import { Student } from 'src/app/student';
import { EventHandlerService } from '../services/event-handler.service';
import { StudentBetaalService } from '../services/student-betaal.service';
import { owed } from '../owed';


@Component({
  selector: 'app-student-betaald',
  templateUrl: './student-betaald.component.html',
  styleUrls: ['./student-betaald.component.css']
})
export class StudentBetaaldComponent implements OnInit {
  students: Student[];
  total: number;
  payments: owed[];

  constructor(private httpService: HttpServiceService,
    private eventHandler: EventHandlerService,
    private calculateService: StudentBetaalService) {}

  ngOnInit(): void {
    this.getStudents();
    this.eventHandler.$reloadEvent.subscribe(data => this.getStudents());
    
  }

  getStudents(): void{
    this.httpService.getStudents().subscribe(students => {this.students = students, this.getTotal(), this.calculateAll()});
  }

  getTotal(): void{
    this.total = this.calculateService.getTotal(this.students);
  }

  calculateSort(): void{
    this.calculateService.calculateAll(this.students, this.total);
  }

  calculateAll(): void{
    this.payments = this.calculateService.calculateAll(this.students, this.total);
  }

}
