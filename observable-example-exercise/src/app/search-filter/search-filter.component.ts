import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  constructor() { }

  @ViewChild('filterBar') filterBar: ElementRef

  ngOnInit() {
    var input$ = fromEvent(this.filterBar.nativeElement, 'keyup')

    var subscription = input$.subscribe(inputEvent => console.log(inputEvent))
  }

}
