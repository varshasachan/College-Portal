import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) { }

  getSchoolDetails(): any {
    return this.http.get(`http://localhost:3000/posts`).pipe(catchError(this.ErrorHandler));
  }

  createSchoolDetails(school: any):any {
    return this.http.post(`http://localhost:3000/posts`, school);
  }

  updateSchoolDetails(school: any): any {
    return this.http.put(`http://localhost:3000/posts/`+ school.id, school);
  }

  deleteSchoolDetails(school : any): any {
     return this.http.delete(`http://localhost:3000/posts/`+ school.id);
  }

  createSyllabus(syllabus: any): any {
    return this.http.post(`http://localhost:3000/syllabus`, syllabus);
  }

  ErrorHandler(error: HttpErrorResponse) {
    // console.log(error.message);
    if (error.error instanceof ErrorEvent) {
      console.error('An error occured:', error.error.message);
    }
    else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error.message}`);
    }
    return throwError('Something Bad Happened...Please try again later');
  }
}