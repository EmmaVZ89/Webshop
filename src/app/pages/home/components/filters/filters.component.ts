import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  template: `./filters.component.html`
})
export class FiltersComponent implements OnInit {
  categories = ["shoes", "sports"];

  constructor(){}

  ngOnInit():void {

  }

}
