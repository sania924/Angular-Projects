import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() btnText: string = '';
  @Input() btnClasses: string = '';
  @Output() onbtnclick = new EventEmitter<any>();
  onClick() {
    this.onbtnclick.emit('hi im from child');
  }
}
