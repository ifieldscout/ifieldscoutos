import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class UserService {

  public apiUrl: 'https://ifscoutsf.herokuapp.com';
  constructor(private http: HttpClient) { }
  
  ngOnInit() {  }
  getCaseById(caseid): Observable<any> {
    return this.http.get('https://ifscoutsf.herokuapp.com/api/Case/View/caseid/'+caseid, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }
}