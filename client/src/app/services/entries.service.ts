import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {
  constructor(private http: HttpClient) {}

  public getEntries(): Observable<any> {
    const url = `http://localhost:8000/api/entries`;
    return this.http.get(url).pipe(map(data => data));
  }

  public sendEntry(
    user_id: string,
    text: string,
    replied_id: string = null
  ): Observable<any> {
    const user = { user_id, text, replied_id };
    const url = `http://localhost:8000/api/entry/add`;
    return this.http.post(url, user).pipe(map(data => data));
  }
}
