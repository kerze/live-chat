import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  currentUser: User;
  openedDropdown: boolean;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.me();
  }

  public openDropdown() {
    this.openedDropdown = !this.openedDropdown;
  }

  public me() {
    this.auth.me().subscribe(res => {
      this.currentUser = res;
      console.log('res nav', res);
      if (res) {
        this.router.navigateByUrl('/entries');
      } else {
        this.router.navigateByUrl('/login');
      }
    });
  }
  public logout() {
    this.openedDropdown = false;
    this.auth.logout().subscribe(() => {});
    this.router.navigateByUrl('/login');
  }
}
