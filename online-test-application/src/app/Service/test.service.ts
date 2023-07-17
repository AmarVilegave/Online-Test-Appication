import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  questions:any[] = [];
  index:number=0;
  time:number =60;
  timeSubject= new BehaviorSubject(this.time)
  private url: any = 'http://localhost:5000/questions';
  private url2: any = 'http://localhost:5000/candidatesData';
  constructor(private http:HttpClient) {
    this.http.get<any>(this.url).subscribe((databaseQuestions) => {
      this.questions = databaseQuestions;
    });
  }

  updateAnswer(obj: any, url:string) {
    return this.http.patch<any>(url, obj)
   }

   updateCandidateData(data: any) {
    return this.http.post<any>(this.url2, data);
  }

  getAllQuestions() {
    return this.questions
  }

  getCandidateObject(userEmail:string) {
    return this.http.get<any>(this.url2 + '/' + userEmail)
  }

  getIndex(): Observable<any> {
    return of(this.index);
  }

  nextQuestion() {
    this.index++;
  }

  previousQuestion() {
    this.index--;
  }

  getTimeObservable() {
    return this.timeSubject.asObservable();
  }
}


