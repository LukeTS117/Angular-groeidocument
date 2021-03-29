import { Injectable } from '@angular/core';
import { Student } from '../student';
import { owed } from '../owed'

@Injectable({
  providedIn: 'root'
})
export class StudentBetaalService {

  constructor() { }

  getTotal(students: Student[]): number{
    let temp: number = 0;
    students.map(student => {temp += +student.amount; console.log(student)});
    return temp;
  }

  calculateAll(students: Student[], total: number): owed[]{
    let average: number = total/students.length;
    
    let studentDebt: Student[] = [];
    let studentTrust: Student[] = [];

    let payments: owed[] = [];

    for(let student of students){
      let amount: number = student.amount - average;
      if(amount < 0){
        studentDebt.push(new Student(student.name, -amount));
      } else {
        studentTrust.push(new Student(student.name, amount));
      }
    }

    studentDebt.sort((a, b) => (a.amount - b.amount));
    studentTrust.sort((a, b) => (a.amount - b.amount));

    while(studentDebt.length > 0 && studentTrust.length > 0 ){
      let reciever = studentTrust[0];
      let payer = studentDebt[0];

      if(payer.amount >= reciever.amount) {
        payments.push(new owed(payer.name, reciever.amount, reciever.name));
        if (payer.amount > reciever.amount) {
          studentDebt.push(new Student(payer.name, payer.amount - reciever.amount));
        }
      }  else if (payer.amount < reciever.amount){
        payments.push(new owed(payer.name, payer.amount, reciever.name));
        studentTrust.push(new Student(reciever.name, reciever.amount - payer.amount));
      } 
      studentDebt.splice(studentDebt.indexOf(payer), 1);
      studentTrust.splice(studentTrust.indexOf(reciever), 1);
    }

    return payments;
  }
}
