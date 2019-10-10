import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  message = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  public login() {
    if (this.email && this.password) {
      this.auth.login(this.email, this.password).subscribe(
        res => {
          console.log('res login', res);
          this.router.navigateByUrl('/entries');
        },
        err => {
          this.message = err.error;
          console.error(err);
        }
      );
    }
  }
}
