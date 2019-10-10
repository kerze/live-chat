import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../../services/entries.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {
  message: '';
  userModal: {};
  showModal: boolean;
  entriesList: Array<any>;
  config: any;
  currentUser: User;

  constructor(private entries: EntriesService, private auth: AuthService) {}

  ngOnInit() {
    this.me();
    this.config = {
      itemsPerPage: 10,
      currentPage: 1
    };
    this.getEntries();
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  public me() {
    this.auth.me().subscribe(res => {
      this.currentUser = res;
    });
  }

  public getEntries() {
    this.entries.getEntries().subscribe(
      res => {
        if (res.result) {
          this.entriesList = res.entries.map(e => {
            if (e.replied_id) {
              e.replied_id.hidden = true;
            }
            return e;
          });
        }
      },
      err => {
        console.error(err);
      }
    );
  }
  public sendMessage(message: string) {
    this.entries.sendEntry(this.currentUser.id, message).subscribe(
      res => {
        if (res.result) {
          this.entriesList = res.entries;
        }
      },
      err => {
        console.error(err);
      }
    );
  }
  public openMessage(id: string) {
    this.entriesList.map(e => {
      if (e.id === id) {
        e.replied_id.hidden = false;
      }
      return e;
    });
  }
  public openModal(user) {
    this.userModal = user;
    if (user) {
      this.showModal = true;
    }
  }
  public closeModal() {
    this.userModal = {};
    this.showModal = false;
  }
}
