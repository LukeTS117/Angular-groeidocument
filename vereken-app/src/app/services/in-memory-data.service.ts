import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from  'src/app/student';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const students = [{ name:'jake', owed:10.00}];
    return {students};
  }
  constructor() { }
}
