import { Injectable, EventEmitter } from '@angular/core';
import { Student } from 'src/app/student';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  

  private studentsUrl = 'api/students'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.studentsUrl);
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentsUrl, student, this.httpOptions).pipe(
      tap((newStudent: Student) => this.log(`added student w/ id=${newStudent.id}`)));
  } 

  log(message: string): void{
    console.log(message);  
  }
}
