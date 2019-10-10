import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-text-send',
  templateUrl: './text-send.component.html',
  styleUrls: ['./text-send.component.scss']
})
export class TextSendComponent implements OnInit {
  @Output()
  sendMessage;

  @Input()
  className;

  message: string;
  notValid: boolean;

  constructor() {
    this.sendMessage = new EventEmitter();
  }

  ngOnInit() {}

  public send() {
    if (!this.message) {
      this.notValid = true;
    } else {
      this.sendMessage.emit(this.message);
      this.message = '';
    }
  }
  public clearValid() {
    this.notValid = false;
  }
}
