import { Component, OnInit } from '@angular/core';
import { EventHandlerService } from '../services/event-handler.service';
import { HttpServiceService } from '../services/http-service.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-betaal',
  templateUrl: './student-betaal.component.html',
  styleUrls: ['./student-betaal.component.css']
})
export class StudentBetaalComponent implements OnInit {

  students!: Student[];

  constructor(private httpService: HttpServiceService, private eventHandler: EventHandlerService) { }

  ngOnInit(): void {
    
  }

  addStudent(name: string, amount: number): void {
    name = name.trim();
    if (!name) { return; }
    if (!amount) { return; }
    this.httpService.addStudent({ name, amount } as Student)
      .subscribe(data => {
        this.eventHandler.emitEvent();
      });
  }


  
}
