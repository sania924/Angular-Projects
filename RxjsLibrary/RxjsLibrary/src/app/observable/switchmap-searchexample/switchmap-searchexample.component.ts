import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, pluck } from 'rxjs';
import { SwitchService } from '../switch.service';

@Component({
  selector: 'app-switchmap-searchexample',
  templateUrl: './switchmap-searchexample.component.html',
  styleUrl: './switchmap-searchexample.component.scss',
})
export class SwitchmapSearchexampleComponent implements AfterViewInit {
  constructor(private service: SwitchService) {}
  @ViewChild('searchForm') searchForm!: NgForm;
  ngAfterViewInit(): void {
    this.service.getUsers().subscribe((res) => {
      console.log(res);
    });
    const formValue = this.searchForm.valueChanges;
    formValue!
      .pipe(
        pluck('searchTerm'),
        debounceTime(1000),
        distinctUntilChanged()
        // map((data) => data['searchTerm'])
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
