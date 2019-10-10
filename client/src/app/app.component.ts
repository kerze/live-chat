import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';
  // user: User;

  // constructor(private http: HttpClient) {}
  constructor() {}

  ngOnInit() {
    // this.http.get<User>('http://localhost:8000/auth').subscribe(data => {
    //   console.log(data);
    //   this.user = data;
    // });
  }
}
