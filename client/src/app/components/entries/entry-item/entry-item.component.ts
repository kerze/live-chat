import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { EntriesService } from '../../../services/entries.service';

@Component({
  selector: 'app-entry-item',
  templateUrl: './entry-item.component.html',
  styleUrls: ['./entry-item.component.scss']
})
export class EntryItemComponent implements OnInit {
  @Output()
  openMessage;
  @Output()
  openModal;

  @Input()
  entry;

  @Input()
  currentUser;

  constructor(private entries: EntriesService) {
    this.openMessage = new EventEmitter();
    this.openModal = new EventEmitter();
  }

  ngOnInit() {}

  public retryMessage(message: string, id: string) {
    this.entries.sendEntry(this.currentUser.id, message, id).subscribe(
      res => {
        if (res.result) {
          console.log('res', res);
          // this.entriesList = res.entries;
        }
      },
      err => {
        console.error(err);
      }
    );
  }
  public open(id: string) {
    this.openMessage.emit(id);
  }
  public openM(user) {
    this.openModal.emit(user);
  }
}
