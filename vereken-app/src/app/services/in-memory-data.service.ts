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
    ];
    return {students};
  }
  constructor() { }
  
  genId(students: Student[]): number {
    return students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 11;
  }
}
