import { Component } from '@angular/core';
import { FromeventService } from '../../services/service/fromevent.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.scss',
})
export class Comp1Component {
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
