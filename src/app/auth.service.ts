import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { globalResponse } from './models/globalResponse';

@Injectable()
export class AuthService {

  public apiUrl = 'https://ifscoutsf.herokuapp.com';
  public client_id = '3MVG9YDQS5WtC11qHJQk_YhatjP7ubyiKdLc5wo8XAJz.0WRrDklsicBOjB.6dHZT77Sx6OXgEyZxLGlIbdw.';
  public secret = '9164549395693201582';
  public res: string;
  constructor(private http: HttpClient) { }
  getAccessToken(): Observable<any> { 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(this.client_id + ':' + this.secret)
      })
    }
    const body = 'userId={0}&clientId={1}&redirect_uri={2}&token={3}'
      .replace('{0}', '1')
      .replace('{1}', '20')
      .replace('{2}', 'https://ifscoutoauth.herokuapp.com/')
      .replace('{3}', 'a1056cb006a40f9ace3cbbf1a79b0bf7');

    console.log('Access token body.....' + body);
    console.log('header ' + httpOptions);
    return this.http.post(this.apiUrl+'/api/AccessToken/Create', body, httpOptions);
  }

  getOauthToken(): Observable<globalResponse> {
    const body = 'grant_type={0}&redirect_uri={1}&code={2}'
      .replace('{0}', 'authorization_code')
      .replace('{1}', 'https://ifscoutoauth.herokuapp.com/')
      .replace('{2}', 'a1056cb006a40f9ace3cbbf1a79b0bf7');

    return this.http.post<globalResponse>(this.apiUrl+'/api/Oauth2/token', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(this.client_id + ':' + this.secret)
      })
    });
  }

  storeToken(token: string) {
    localStorage.setItem('token', token);
  }

  /*loginUser(user): Observable<any> {
    return this.http.post('https://ifieldscoutoauth.herokuapp.com/api/Security/login', { username: user.username, password: user.password }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + this.getOauthToken()
      })
    }).pipe(
      map(user => user)
    );
  }*/
}
