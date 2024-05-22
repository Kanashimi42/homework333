import { NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-block',
  standalone: true,
  imports: [NgIf],
  templateUrl: './card-block.component.html',
  styleUrl: './card-block.component.css'
})
export class CardBlockComponent {
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() price: number = 0;
  @Input() discount: number = 100;
  @Input() filter: string = '';

  @Output() idEvent = new EventEmitter<number>();
  idInfo(idValue: number) {
    this.idEvent.emit(idValue);
  }

  constructor() {}
}
