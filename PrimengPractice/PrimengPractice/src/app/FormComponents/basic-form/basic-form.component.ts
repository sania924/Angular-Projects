import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { SharedModule } from '../../sharedModule/shared.module';
// interface auto complete
interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}
// dropdown
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-basic-form',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.scss',
})
export class BasicFormComponent implements OnInit {
  // autocomplete
  countries: any[] | undefined;
  selectedCountry: any;
  selectedCountryAdvanced: any[] | undefined;

  formGroup!: FormGroup;

  filteredCountries!: any[];
  selectedItems: any[] | undefined;

  items!: any[];
  // calender
  date1: Date | undefined;
  date: Date[] | undefined;

  time: Date[] | undefined;
  // checkbox
  checked: boolean = false;
  // chip
  values: string[] | undefined;
  // dropdown
  cities: City[] | undefined;

  selectedCity: City | undefined;
  selectedCity2: City | undefined;

  // float label
  value: string | undefined;
  value4: string | undefined;
  value45: string | undefined;
  value55: string | undefined;
  value65: string | undefined;

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countryService.getCountries().then((countries) => {
      this.countries = countries;
    });

    this.formGroup = new FormGroup({
      selectedCountry: new FormControl<object | null>(null),
      date: new FormControl<Date | null>(null), //for calender
      city: new FormControl<string | null>(null), //for checkbox

      values: new FormControl<string[] | null>(null), //for chip
      text: new FormControl<string | null>(null), //for input text
      text2: new FormControl<string | null>(null), //for text area
      checked: new FormControl<boolean>(false), //toggle button
    });
    // dropdown
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
    selectedCity: new FormControl<City | null>(null);
  }

  filterCountry(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.countries as any[]).length; i++) {
      let country = (this.countries as any[])[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }
  // dropdown method
  dropdownCountry(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.countries as any[]).length; i++) {
      let country = (this.countries as any[])[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }
  // custom template
  customCountry(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.countries as any[]).length; i++) {
      let country = (this.countries as any[])[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }
  // for multiple select
  search(event: AutoCompleteCompleteEvent) {
    this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
  }
}
