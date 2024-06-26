import { Component } from '@angular/core';
import { FromeventService } from '../../services/service/fromevent.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.scss',
})
export class Comp2Component {
  userName!: string;
  constructor(private service: FromeventService) {
    this.service.userName.subscribe((res) => {
      console.log(res);
      this.userName = res;
    });
  }
  ngOnInit() {}
  onchange(inputuserName: any) {
    console.log(inputuserName.value);
    this.service.userName.next(inputuserName.value);
  }
}
