import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  constructor() { }

  @ViewChild('filterBar') filterBar: ElementRef

  @Output() stringToSearch = new EventEmitter();

  ngOnInit() {
    var input$ = fromEvent(this.filterBar.nativeElement, 'keyup')

    var subscription = input$.
                      pipe(map((inputEvent: any) => inputEvent.target.value)). 
                      subscribe(inputString => this.stringToSearch.emit(inputString))
  }

}
