import { Component, OnInit } from '@angular/core';
import { FromeventService } from '../../services/service/fromevent.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(private service: FromeventService) {}
  exclusive: boolean = false;
  ngOnInit() {
    this.service.exclusive.subscribe((data: any) => (this.exclusive = data));
  }
}
