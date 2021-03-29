import { JsonpClientBackend } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const students = [
      {id: 1, name: 'jake', owed: 50.00},
      {id: 2, name: 'jhon', owed: 50.00},
      {id: 3, name: 'jones', owed: 50.00},
      {id: 4, name: 'luke', owed: 50.00},
      {id: 5, name: 'ads', owed: 50.00},
      {id: 6, name: 'je', owed: 50.00},
      {id: 7, name: 'qwe', owed: 50.00},

    ];
    return {students};
  }
  constructor() { }
  
  genId(students: Student[]): number {
    return students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 11;
  }
}
