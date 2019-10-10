import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {}

  public login(email: string, password: string): Observable<any> {
    const user = { email, password };
    const url = `http://localhost:8000/api/login`;
    return this.http.post(url, user).pipe(map(data => data));
  }

  public register(user): Observable<any> {
    const url = `http://localhost:8000/api/register`;
    return this.http.post(url, user).pipe(map(data => data));
  }

  public me(): Observable<any> {
    const url = `http://localhost:8000/auth`;
    return this.http.get(url).pipe(map(data => data));
  }
  public logout(): Observable<any> {
    const url = `http://localhost:8000/api/logout`;
    return this.http.get(url);
  }
}
