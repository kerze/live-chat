import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input()
  userModal;
  @Input()
  showModal;
  @Output()
  closeModal;

  constructor() {
    this.closeModal = new EventEmitter();
  }

  ngOnInit() {}

  close() {
    this.closeModal.emit();
  }
}
