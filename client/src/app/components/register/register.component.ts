import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: ''
  };
  message = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  public register() {
    this.auth.register(this.user).subscribe(
      res => {
        this.router.navigateByUrl('/login');
      },
      err => {
        console.error(err.error);
      }
    );
  }
}
