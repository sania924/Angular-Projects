import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AlertComponent } from '../../alert/alert.component';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [RouterLink, RouterOutlet, AlertComponent],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.scss',
})
export class ViewchildComponent implements AfterViewInit {
  @ViewChild('text') text?: ElementRef;
  @ViewChild(AlertComponent) alert?: AlertComponent;
  ngAfterViewInit(): void {
    const value = this.text?.nativeElement.value;

    console.log(value);
    const alertmode = this.alert?.alertmode;
    console.log(alertmode);
  }
}
